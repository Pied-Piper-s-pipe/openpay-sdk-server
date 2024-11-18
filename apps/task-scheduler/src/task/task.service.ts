import { EVENT_COIN_PRICE_CHANGED } from '@app/shared/define/const';
import {
  COIN_MAEKET_ACCESSKEY,
  COIN_MAEKET_API,
  TASK_PRICE_CRON,
} from '@app/shared/define/env.name';
import { PrismaService } from '@app/shared/prisma/prisma.service';
import { SharedService } from '@app/shared/shared.service';
import { InjectRedis } from '@nestjs-modules/ioredis';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientProxy, ClientProxyFactory } from '@nestjs/microservices';
import { Cron, CronExpression } from '@nestjs/schedule';
import axios from 'axios';
import Redis from 'ioredis';

@Injectable()
export class TaskService {
  logger = new Logger(TaskService.name);
  priceRmqClientProxy: ClientProxy;

  private readonly priceCron: string;

  constructor(
    @InjectRedis() private readonly redis: Redis,
    @Inject(SharedService) private readonly sharedService: SharedService,
    @Inject() private readonly prismaService: PrismaService,
    @Inject() private readonly configService: ConfigService,
  ) {
    this.priceRmqClientProxy = ClientProxyFactory.create(
      sharedService.getRmqOptions('COIN_PRICE_PUSH_QUEUE', '', 10),
    );
    this.priceCron = this.configService.get<string>(TASK_PRICE_CRON);
  }

  @Cron(CronExpression.EVERY_MINUTE)
  async priceTask() {
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
      const priceData = await this.queryPrice(tokens);
      await this.publishPriceEvent(priceData);
      // 更新偏移量
      offset += limit;
    }
  }

  async queryPrice(tokens: any[]) {
    const api = this.configService.get<string>(COIN_MAEKET_API);
    const accessKey = this.configService.get<string>(COIN_MAEKET_ACCESSKEY);
    const quotesUrl = `${api}/v2/cryptocurrency/quotes/latest`;

    const headers = {
      Accepts: 'application/json',
      'X-CMC_PRO_API_KEY': accessKey, // 用您的 CoinMarketCap API 密钥替换
    };
    const coinMarketCapIds = tokens.map((token) => {
      return token.coin_market_cap_id;
    });
    this.logger.debug(
      `queryPrice: ${JSON.stringify(
        coinMarketCapIds,
      )}, quotesUrl: ${quotesUrl}, headers: ${JSON.stringify(headers)}`,
    );

    try {
      const idsString = coinMarketCapIds.join(',');
      // 获取币种的报价信息
      const quotesParams = { id: idsString };
      this.logger.log(`quotesParams: ${JSON.stringify(quotesParams)}`);
      const quotesResponse = await axios.get(quotesUrl, {
        headers,
        params: quotesParams,
      });
      const quotesData = quotesResponse.data.data;

      // 整合信息
      const cryptoCurrencyDatas = tokens.map((token) => {
        const quote = quotesData[token.coin_market_cap_id];

        return {
          id: token.id,
          token_symbol: token.token_symbol,
          price: quote?.quote?.USD?.price || '',
          percent_change_1h: quote?.quote?.USD?.percent_change_1h || '',
          percent_change_24h: quote?.quote?.USD?.percent_change_24h || '',
        };
      });

      return cryptoCurrencyDatas;
    } catch (error) {
      this.logger.error(
        `queryPrice: ${JSON.stringify(coinMarketCapIds)}, error: ${error}`,
      );
      return [];
    }
  }

  async publishPriceEvent(priceData: any[]) {
    this.logger.log(`publishPriceEvent: ${JSON.stringify(priceData)}`);
    try {
      return this.priceRmqClientProxy.emit(EVENT_COIN_PRICE_CHANGED, priceData);
    } catch (error) {
      this.logger.error(
        `publishPriceEvent: ${JSON.stringify(priceData)}, error: ${error}`,
      );
    }
  }
}
