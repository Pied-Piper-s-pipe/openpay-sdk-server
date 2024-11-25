import { Inject, Injectable } from '@nestjs/common';
import { CreateChainDto } from './dto/create-chain.dto';
import { UpdateChainDto } from './dto/update-chain.dto';
import { InjectRedis } from '@nestjs-modules/ioredis';
import Redis from 'ioredis';
import { CHAIN_LIST } from '@app/shared/define/redis-key-suffix';
import { PrismaService } from '@app/shared/prisma/prisma.service';
import { GetChainsResponseDto } from './dto/get-chains.response.dto';
import { plainToInstance } from 'class-transformer';
import { ChainStatusTypeEnum } from '@app/shared/define/chain.enum';
import { REDIS_EXPIRE } from '@app/shared/define/const';

@Injectable()
export class ChainService {
  constructor(
    @InjectRedis() private readonly redis: Redis,
    @Inject() private readonly prismaService: PrismaService,
  ) {}

  create(createChainDto: CreateChainDto) {
    return 'This action adds a new chain';
  }

  async findAll(): Promise<GetChainsResponseDto[]> {
    const redisKey = CHAIN_LIST;
    const list = await this.redis.zrangebyscore(redisKey, 0, -1);
    if (list.length == 0) {
      const chains = await this.prismaService.chain.findMany({
        where: { status_type: ChainStatusTypeEnum.Normal },
        orderBy: { sort: 'asc' },
      });
      return Promise.all(
        chains.map(async (chain) => {
          await this.redis.zadd(redisKey, chain.sort, JSON.stringify(chain));
          await this.redis.expire(redisKey, REDIS_EXPIRE);
          return {
            chain_id: chain.chain_id,
            wallet_type: chain.wallet_type,
            chain_name: chain.chain_name,
            chain_icon: chain.chain_icon,
          };
        }),
      );
    }
    const chainInfoList = list
      .map((item) => {
        try {
          return plainToInstance(GetChainsResponseDto, JSON.parse(item));
        } catch (error) {
          console.error('Error parsing chain info:', error);
          return null;
        }
      })
      .filter((item) => item !== null);

    return chainInfoList;
  }

  findOne(id: number) {
    return `This action returns a #${id} chain`;
  }

  update(id: number, updateChainDto: UpdateChainDto) {
    return `This action updates a #${id} chain`;
  }

  remove(id: number) {
    return `This action removes a #${id} chain`;
  }
}
