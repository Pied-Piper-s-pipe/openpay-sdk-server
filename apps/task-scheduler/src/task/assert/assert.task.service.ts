import {
  COIN_MAEKET_ACCESSKEY,
  COIN_MAEKET_API,
  OPSDK_API,
  OPSDK_WEBSOCKET,
} from '@app/shared/define/env.name';
import { PrismaService } from '@app/shared/prisma/prisma.service';
import { SharedService } from '@app/shared/shared.service';
import { InjectRedis } from '@nestjs-modules/ioredis';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import Redis from 'ioredis';
import { QueryUserTokenBalanceResponse } from '../../model/query-user-token-balance.response';
import { Cron, CronExpression } from '@nestjs/schedule';
import { TokenBalanceQuerier } from '../../token-query/token_query';
import { Token, UserWallet } from 'prisma/.prisma/backend-client';
import { CurrentCoinPriceService } from './current-coin-price.service';
import { QueryTokenBalanceService } from './query-token-balance.service';
import BigNumber from 'bignumber.js';

@Injectable()
export class AssertTaskService {
  logger = new Logger(AssertTaskService.name);

  private tokenPrice: Record<string, string> = {};
  private tokenMap: Record<string, any> = {};

  constructor(
    @InjectRedis() private readonly redis: Redis,
    @Inject(SharedService) private readonly sharedService: SharedService,
    @Inject() private readonly prismaService: PrismaService,
    @Inject() private readonly configService: ConfigService,
    @Inject() private readonly coinPriceService: CurrentCoinPriceService,
    @Inject() private readonly tokenBalanceService: QueryTokenBalanceService,
  ) {
    this.initTokenMap();
    //this.assertCountTask();
  }

  private async initTokenMap() {
    const tokens = await this.prismaService.token.findMany({
      include: {
        chain: true,
      },
    });
    tokens.forEach((token) => {
      this.tokenMap[token.id] = token;
    });
  }

  @Cron(CronExpression.EVERY_DAY_AT_1AM)
  async assertCountTask() {
    try {
      this.logger.log(`开始执行资产统计任务`);
      this.tokenPrice = await this.coinPriceService.queryTokenCurrencyPrice();
      this.logger.log(`tokenPrice: ${JSON.stringify(this.tokenPrice)}`);

      const userIdList = await this.prismaService.userWallet.findMany({
        select: { user_id: true },
        distinct: ['user_id'],
      });
      // 使用 Promise.all 处理所有用户
      const results = await Promise.allSettled(
        userIdList.map(async (user) => {
          const userWallets = await this.prismaService.userWallet.findMany({
            where: { user_id: user.user_id },
          });

          try {
            const userTokenAssert = await this.getUserTokenAsserts(
              user.user_id,
              userWallets,
            );
            if (userTokenAssert) {
              await this.saveUserTokenAsserts(user.user_id, userTokenAssert);
            }
          } catch (error) {
            this.logger.error(
              `Error processing wallet for user ${user.user_id}: ${error.message}`,
            );
          }
        }),
      );
      // 记录整体执行结果
      const failedCount = results.filter((r) => r.status === 'rejected').length;
      if (failedCount > 0) {
        this.logger.warn(
          `资产统计任务完成，但有 ${failedCount} 个用户处理失败`,
        );
      } else {
        this.logger.log(`资产统计任务成功完成`);
      }
    } catch (error) {
      // 捕获顶层异常，确保定时任务不会停止
      this.logger.error(`资产统计任务发生错误: ${error.message}`, error.stack);
    }
  }

  async getUserTokenAsserts(
    userID: string,
    userWallets: UserWallet[],
  ): Promise<string> {
    try {
      const subscribed = await this.prismaService.tokenSubscribe.findUnique({
        where: { user_id: userID },
      });
      if (!subscribed) {
        this.logger.warn(`do not found subscribed tokens ${userID}`);
      }
      const subscribedTokenIDs = JSON.parse(subscribed.token_ids) as string[];
      const tokenBalances = await Promise.allSettled(
        subscribedTokenIDs.map(async (subscribeTokenID) => {
          let token = this.tokenMap[subscribeTokenID];
          if (!token) {
            token = await this.prismaService.token.findFirst({
              include: {
                chain: true,
              },
              where: { id: subscribeTokenID },
            });
            if (!token) {
              this.logger.warn(`do not found token ${subscribeTokenID}`);
              return;
            }
            this.tokenMap[subscribeTokenID] = token;
          }
          const walletType = token.chain.wallet_type;
          const filteredWallets = userWallets.filter(
            (wallet) => wallet.wallet_type === walletType,
          );
          if (filteredWallets.length > 0) {
            const tokenBalance =
              await this.tokenBalanceService.queryTokenBalance(
                walletType,
                token.token_name,
                filteredWallets[0].address,
              );
            if (
              tokenBalance &&
              tokenBalance !== '0' &&
              this.tokenPrice[subscribeTokenID]
            ) {
              const balance = new BigNumber(tokenBalance);
              const price = new BigNumber(this.tokenPrice[subscribeTokenID]);
              const assertPrice = balance.multipliedBy(price).toFixed(18);
              return assertPrice;
            }
          }
          return null;
        }),
      );

      // 处理结果
      const validBalances = tokenBalances
        .filter(
          (result) => result.status === 'fulfilled' && result.value !== null,
        )
        .map((result) => (result as PromiseFulfilledResult<string>).value);

      return validBalances.reduce((sum, balance) => {
        return new BigNumber(sum).plus(balance).toFixed(18);
      }, '0');
    } catch (error) {
      this.logger.error(
        `something went wrong when getUserTokenAsserts ${userID}`,
      );
    }
  }

  async saveUserTokenAsserts(userID: string, assert: string) {
    await this.prismaService.userBalanceHistory.create({
      data: {
        user_id: userID,
        assert: assert,
        count_date: new Date().toISOString().split('T')[0],
      },
    });
  }
}
