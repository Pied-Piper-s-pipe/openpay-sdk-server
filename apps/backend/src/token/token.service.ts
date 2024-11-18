import { Inject, Injectable, Logger } from '@nestjs/common';
import { CreateTokenDto } from './dto/create-token.dto';
import { UpdateTokenDto } from './dto/update-token.dto';
import { PageTokenRequestDto } from './dto/page-token.request.dto';
import { PrismaService } from '@app/shared/prisma/prisma.service';
import { InjectRedis } from '@nestjs-modules/ioredis';
import Redis from 'ioredis';
import {
  PageTokenDto,
  PageTokenResponseDto,
} from './dto/page-token.response.dto';
import {
  SubscribeTokenReqeustDto,
  UnsubscribeTokenReqeustDto,
} from './dto/subscribe-token.request.dto';
import { SubscribeTokenResponseDto } from './dto/subscribe-token.response.dto';
import {
  COIN_MARKET_SUBSCRIBE,
  TOKEN,
  TOKEN_SUBSCRIBE_SUFFIX,
} from '@app/shared/define/redis-key-suffix';
import { TokenInfo } from './entities/token.entity';

@Injectable()
export class TokenService {
  logger = new Logger(TokenService.name);
  constructor(
    @Inject(PrismaService) private prismaService: PrismaService,
    @InjectRedis() private readonly redis: Redis,
  ) {}

  create(createTokenDto: CreateTokenDto) {
    return 'This action adds a new token';
  }

  async findAll(
    pageTokenRequest: PageTokenRequestDto,
  ): Promise<PageTokenDto[]> {
    this.logger.log(
      `find all tokens request: ${JSON.stringify(pageTokenRequest)}`,
    );
    return await this.prismaService.token.findMany({
      select: {
        id: true,
        chain_id: true,
        token_name: true,
        token_symbol: true,
        token_icon: true,
        token_decimals: true,
        contract_address: true,
        coin_market_cap_id: true,
        is_native: true,
        is_multiple_chain: true,
      },
      where: {
        ...(pageTokenRequest.chain_id && {
          chain_id: pageTokenRequest.chain_id,
        }),
        ...(!isNaN(pageTokenRequest.wallet_type) && {
          chain: {
            wallet_type: pageTokenRequest.wallet_type,
          },
        }),
      },
    });
  }

  async findOne(id: string): Promise<TokenInfo> {
    this.logger.log(`find token request: ${id}`);
    const redisKey = TOKEN.concat(id);
    const redisToken = await this.redis.get(redisKey);
    if (redisToken) {
      const token = JSON.parse(redisToken) as TokenInfo;
      return token;
    }
    const token = await this.prismaService.token.findUnique({
      where: { id: id },
    });
    if (token) {
      await this.redis.set(redisKey, JSON.stringify(token));
      return token;
    }
    return {} as TokenInfo;
  }

  update(id: number, updateTokenDto: UpdateTokenDto) {
    return `This action updates a #${id} token`;
  }

  remove(id: number) {
    return `This action removes a #${id} token`;
  }

  async subscribeToken(
    body: SubscribeTokenReqeustDto,
  ): Promise<SubscribeTokenResponseDto> {
    this.logger.log(`subscribe token request: ${JSON.stringify(body)}`);
    const subscribed = await this.prismaService.tokenSubscribe.findUnique({
      where: {
        address: body.address,
      },
    });
    let created;
    let newSubscribeTokenList: string[];

    //first subscribe
    if (!subscribed) {
      created = await this.prismaService.tokenSubscribe.create({
        data: {
          address: body.address,
          token_ids: JSON.stringify(body.token_ids),
        },
      });
      newSubscribeTokenList = body.token_ids;
    } else {
      const existingTokenIds = JSON.parse(subscribed.token_ids) as string[];
      newSubscribeTokenList = body.token_ids.filter(
        (id) => !existingTokenIds.includes(id),
      );
      const mergedTokenIds = Array.from(
        new Set([...existingTokenIds, ...newSubscribeTokenList]),
      ); // Change this line

      created = await this.prismaService.tokenSubscribe.update({
        where: {
          address: body.address,
        },
        data: {
          token_ids: JSON.stringify(mergedTokenIds),
        },
      });
    }

    //add redis
    for (const tokenID of newSubscribeTokenList) {
      const subscribeKey = TOKEN_SUBSCRIBE_SUFFIX.concat(tokenID);
      this.redis.sadd(subscribeKey, body.address);

      const coinMarketKey = COIN_MARKET_SUBSCRIBE;
      this.redis.sadd(coinMarketKey, tokenID);
    }

    return { ...body };
  }

  async unsubscribeToken(
    body: UnsubscribeTokenReqeustDto,
  ): Promise<SubscribeTokenResponseDto> {
    this.logger.log(`unsubscribe token request: ${JSON.stringify(body)}`);

    const subscribed = await this.prismaService.tokenSubscribe.findUnique({
      where: {
        address: body.address,
      },
    });
    if (!subscribed) {
      return { ...body };
    }

    const existingTokenIds = JSON.parse(subscribed.token_ids) as string[];
    const mergedTokenIds = existingTokenIds.filter(
      (id) => !body.token_ids.includes(id),
    );

    const updated = await this.prismaService.tokenSubscribe.update({
      where: {
        address: body.address,
      },
      data: {
        token_ids: JSON.stringify(mergedTokenIds),
      },
    });

    //update redis
    for (const tokenID of body.token_ids) {
      const subscribeKey = TOKEN_SUBSCRIBE_SUFFIX.concat(tokenID);
      this.redis.srem(subscribeKey, body.address);
    }

    return { ...body };
  }

  async subscribeds(from: string): Promise<TokenInfo[]> {
    this.logger.log(`subscribeds request: ${from}`);

    //地址自定义关注tokens
    const subscribed = await this.prismaService.tokenSubscribe.findUnique({
      where: {
        address: from,
      },
    });
    let subscribedTokenIDs: string[];
    if (subscribed) {
      subscribedTokenIDs = JSON.parse(subscribed.token_ids) as string[];
    } else {
      //获取默认关注tokens
      const defaultSubscribeds = await this.prismaService.token.findMany({
        select: { id: true },
        where: { default_subscribe: 1 },
      });
      subscribedTokenIDs = defaultSubscribeds.map((token) => {
        return token.id;
      });
      await this.subscribeToken({
        address: from,
        token_ids: subscribedTokenIDs,
      });
    }

    const tokens: TokenInfo[] = [];
    for (const tokenId of subscribedTokenIDs) {
      const token = await this.findOne(tokenId);
      if (token && Object.keys(token).length > 0) {
        tokens.push(token);
      }
    }
    return tokens;
  }
}
