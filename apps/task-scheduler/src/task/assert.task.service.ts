import {
  COIN_MAEKET_ACCESSKEY,
  COIN_MAEKET_API,
} from '@app/shared/define/env.name';
import { PrismaService } from '@app/shared/prisma/prisma.service';
import { SharedService } from '@app/shared/shared.service';
import { InjectRedis } from '@nestjs-modules/ioredis';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import Redis from 'ioredis';
import { QueryUserTokenBalanceResponse } from '../model/query-user-token-balance.response';

@Injectable()
export class AssertTaskService {
  logger = new Logger(AssertTaskService.name);

  private tokenPrice: Record<string, string> = {};

  constructor(
    @InjectRedis() private readonly redis: Redis,
    @Inject(SharedService) private readonly sharedService: SharedService,
    @Inject() private readonly prismaService: PrismaService,
    @Inject() private readonly configService: ConfigService,
  ) {
    //this.assertCountTask();
  }

  //@Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  async assertCountTask() {
    this.logger.log(`开始执行资产统计任务`);
    await this.queryTokenCurrencyPrice();
    this.logger.log(`tokenPrice: ${JSON.stringify(this.tokenPrice)}`);

    const userCount = await this.prismaService.userWallet.count();
    let offset = 0;
    const limit = 1000;
    while (offset < userCount) {
      const users = await this.prismaService.userWallet.findMany({
        skip: offset,
        take: limit,
      });
      const userTokenBalances = await this.getUserTokenAsserts(users);
      await this.saveUserTokenAsserts(userTokenBalances);
      offset += limit;
    }
  }

  async queryTokenCurrencyPrice() {
    const tokenCount = await this.prismaService.token.count({
      where: { coin_market_cap_id: { not: undefined } },
    });
    let offset = 0;
    const limit = 100;
    while (offset < tokenCount) {
      const tokens = await this.prismaService.token.findMany({
        select: { id: true, coin_market_cap_id: true, token_symbol: true },
        where: { coin_market_cap_id: { not: undefined } },
        skip: offset,
        take: limit,
      });

      // 处理获取到的 tokens
      this.logger.log(
        `处理第 ${offset / limit + 1} 页的 tokens: ${JSON.stringify(tokens)}`,
      );
      const priceData = await this.queryPriceFromCoinMarketCap(tokens);
      // 更新偏移量
      offset += limit;
    }
  }

  async queryPriceFromCoinMarketCap(tokens: any[]) {
    const api = this.configService.get<string>(COIN_MAEKET_API);
    const accessKey = this.configService.get<string>(COIN_MAEKET_ACCESSKEY);

    const quotesUrl = `${api}/v2/cryptocurrency/quotes/latest`;
    const headers = {
      Accepts: 'application/json',
      'X-CMC_PRO_API_KEY': accessKey, // 用您的 CoinMarketCap API 密钥替换
    };

    console.log(quotesUrl);
    console.log(accessKey);

    const coinMarketCapIds = tokens.map((token) => {
      return token.coin_market_cap_id;
    });
    const uniqueCoinMarketCapIds = [...new Set(coinMarketCapIds)];
    console.log(uniqueCoinMarketCapIds);
    this.logger.debug(
      `queryPrice: ${JSON.stringify(
        uniqueCoinMarketCapIds,
      )}, quotesUrl: ${quotesUrl}, headers: ${JSON.stringify(headers)}`,
    );

    try {
      const idsString = uniqueCoinMarketCapIds.join(',');
      // 获取币种的报价信息
      const quotesParams = { id: idsString };
      this.logger.log(`quotesParams: ${JSON.stringify(quotesParams)}`);
      const quotesResponse = await axios.get(quotesUrl, {
        headers,
        params: quotesParams,
      });
      const quotesData = quotesResponse.data.data;

      tokens.map((token) => {
        const quote = quotesData[token.coin_market_cap_id];
        this.tokenPrice[token.id] = quote?.quote?.USD?.price || '';
      });
    } catch (error) {
      this.logger.error(
        `queryPrice: ${JSON.stringify(uniqueCoinMarketCapIds)}, error: ${error}`,
      );
    }
  }

  async getUserTokenAsserts(
    userWallets: any[],
  ): Promise<QueryUserTokenBalanceResponse[]> {
    const testWallets = userWallets.map((userWallet) => {
      return {
        user_id: userWallet.user_id,
        token_id:
          userWallet.wallet_type === 0
            ? '117d4e94-3d85-4dfa-bea3-28503c4e7079'
            : '07481808-cf00-4087-9ae2-c5978ba2c854',
        wallet_type: userWallet.wallet_type,
        token_address: userWallet.token_address,
        token_symbol: userWallet.token_symbol,
        balance: userWallet.wallet_type === 0 ? '1' : '2',
      };
    });

    return testWallets;
    return [];
  }

  async saveUserTokenAsserts(
    userTokenBalances: QueryUserTokenBalanceResponse[],
  ) {
    const userTokenAsserts = userTokenBalances.map((userTokenBalance) => {
      const tokenID = userTokenBalance.token_id;
      const tokenPrice = this.tokenPrice[tokenID];
      const assertPrice = (
        Number(userTokenBalance.balance) * Number(tokenPrice)
      ).toString();
      return {
        user_id: userTokenBalance.user_id,
        balance: userTokenBalance.balance,
        price: tokenPrice.toString(),
        assert: assertPrice,
        token_id: userTokenBalance.token_id,
        wallet_type: userTokenBalance.wallet_type,
        count_date: new Date().toISOString().split('T')[0],
      };
    });

    await this.prismaService.userBalanceHistory.createMany({
      data: userTokenAsserts,
    });
  }
}
