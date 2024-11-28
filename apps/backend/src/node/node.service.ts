import { Inject, Injectable } from '@nestjs/common';
import { CreateNodeDto } from './dto/create-node.dto';
import { UpdateNodeDto } from './dto/update-node.dto';
import { GetNodeByChainResponseDto } from './dto/get-node-by-chain.response.dto';
import { CHAIN_NODE } from '@app/shared/define/redis-key-suffix';
import { InjectRedis } from '@nestjs-modules/ioredis';
import Redis from 'ioredis';
import { PrismaService } from '@app/shared/prisma/prisma.service';
import { ChainStatusTypeEnum } from '@app/shared/define/chain.enum';

@Injectable()
export class NodeService {
  constructor(
    @InjectRedis() private readonly redis: Redis,
    @Inject() private readonly primaService: PrismaService,
  ) {}

  create(createNodeDto: CreateNodeDto) {
    return 'This action adds a new node';
  }

  findAll() {
    return `This action returns all node`;
  }

  findOne(id: number) {
    return `This action returns a #${id} node`;
  }

  update(id: number, updateNodeDto: UpdateNodeDto) {
    return `This action updates a #${id} node`;
  }

  remove(id: number) {
    return `This action removes a #${id} node`;
  }

  async findByChain(wallet_type: number): Promise<GetNodeByChainResponseDto[]> {
    const chains = await this.primaService.chain.findMany({
      select: { chain_id: true, wallet_type: true },
      where: {
        ...(!isNaN(wallet_type) && {
          wallet_type: wallet_type,
        }),
        status_type: ChainStatusTypeEnum.Normal,
      },
      orderBy: { sort: 'asc' },
    });
    // const chainIDs = chains.map((chain) => {
    //   return chain.chain_id;
    // });

    return Promise.all(
      chains.map(async (chain) => {
        const chainID = chain.chain_id;
        const redisKey = CHAIN_NODE.concat(chainID);
        const nodes = await this.redis.lrange(redisKey, 0, -1);
        const result: GetNodeByChainResponseDto = {
          chain_id: chainID,
          wallet_type: chain.wallet_type,
          node_urls: [],
        };
        if (nodes.length == 0) {
          const list = await this.primaService.node.findMany({
            where: { chain_id: chainID },
          });
          await Promise.all(
            list.map(async (node) => {
              await this.redis.lpush(redisKey, node.node_url);
              result.node_urls.push(node.node_url);
            }),
          );
          return result;
        }

        result.node_urls = nodes;
        return result;
      }),
    );
  }
}
