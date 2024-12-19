import {
  COIN_MAEKET_ACCESSKEY,
  COIN_MAEKET_API,
} from '@app/shared/define/env.name';
import { PrismaService } from '@app/shared/prisma/prisma.service';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class CurrentCoinPriceService {
  logger = new Logger(CurrentCoinPriceService.name);

  constructor(
    @Inject() private readonly prismaService: PrismaService,
    @Inject() private readonly configService: ConfigService,
  ) {}

  async queryTokenCurrencyPrice() {
    const tokenCount = await this.prismaService.token.count({
      where: { coin_market_cap_id: { not: undefined } },
    });
    let offset = 0;
    const limit = 100;
    let totalTokenPrice: Record<string, string> = {};
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
      if (priceData) {
        totalTokenPrice = Object.assign(totalTokenPrice, priceData);
      } // 更新偏移量
      offset += limit;
    }
    return totalTokenPrice;
  }

  async queryPriceFromCoinMarketCap(tokens: any[]) {
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
    const uniqueCoinMarketCapIds = [...new Set(coinMarketCapIds)];
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

      const tokenPrice: Record<string, string> = {};
      tokens.forEach((token) => {
        const quote = quotesData[token.coin_market_cap_id];
        tokenPrice[token.id] = quote?.quote?.USD?.price || '';
      });
      return tokenPrice;
    } catch (error) {
      this.logger.error(
        `queryPrice: ${JSON.stringify(uniqueCoinMarketCapIds)}, error: ${error}`,
      );
      return null;
    }
  }
}
