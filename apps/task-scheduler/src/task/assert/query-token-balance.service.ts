import { PrismaService } from '@app/shared/prisma/prisma.service';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UserWallet } from 'prisma/.prisma/backend-client';
import { TokenBalanceQuerier } from '../../token-query/token_query';
import { OPSDK_API, OPSDK_WEBSOCKET } from '@app/shared/define/env.name';

@Injectable()
export class QueryTokenBalanceService {
  logger = new Logger(QueryTokenBalanceService.name);
  private readonly querier = new TokenBalanceQuerier();
  private isInitializing = false;

  constructor(
    @Inject() private readonly prismaService: PrismaService,
    @Inject() private readonly configService: ConfigService,
  ) {
    this.initQuerier();
  }

  private async initQuerier() {
    if (this.isInitializing) return;

    try {
      this.isInitializing = true;
      const opsdkApi = this.configService.get<string>(OPSDK_API);
      const opsdkWebsocket = this.configService.get<string>(OPSDK_WEBSOCKET);

      // 如果已存在实例，先关闭它
      if (this.querier) {
        await this.querier.close();
      }
      await this.querier.init(opsdkApi, opsdkWebsocket);
      this.logger.log('TokenBalanceQuerier initialized successfully');
    } catch (error) {
      this.logger.error(
        `Failed to initialize TokenBalanceQuerier: ${error.message}`,
      );
    } finally {
      this.isInitializing = false;
    }
  }

  async queryTokenBalance(
    walletType: number,
    tokenName: string,
    address: string,
  ): Promise<string> {
    try {
      // 如果 querier 不存在或已关闭，尝试重新初始化
      if (!this.querier) {
        await this.initQuerier();
      }
      const balance = await Promise.race([
        this.querier.queryBalance(walletType, tokenName, address),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Query timeout')), 5000),
        ),
      ]);

      this.logger.log(
        `get token balance success ${walletType} ${address} ${tokenName}`,
      );
      return balance as string;
    } catch (error) {
      this.logger.error(
        `get token balance failed ${walletType} ${address} ${tokenName}, error: ${error}`,
      );

      // 如果是超时错误，尝试重新初始化 querier
      //   if (error.message.includes('timeout')) {
      //     this.logger.warn('Attempting to reinitialize querier due to timeout');
      //     await this.initQuerier();
      //   }

      return '0';
    }
  }
}
