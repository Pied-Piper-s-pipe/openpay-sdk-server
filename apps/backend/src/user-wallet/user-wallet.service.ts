import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { CreateUserWalletRequestDto } from './dto/create-user-wallet.request.dto';
import { UpdateUserWalletDto } from './dto/update-user-wallet.dto';
import { PrismaService } from '@app/shared/prisma/prisma.service';
import { ChainTypeEnum } from '@app/shared/define/chain.enum';
import { CreateUserWalletResponseDto } from './dto/create-user-wallet.response.dto';
import { plainToInstance } from 'class-transformer';
import { v4 as uuidv4 } from 'uuid';
import { PageUserWalletResponseDto } from './dto/page-user-wallet.response.dto';
import { InjectRedis } from '@nestjs-modules/ioredis';
import Redis from 'ioredis';
import { USER_WALLET } from '@app/shared/define/redis-key-suffix';
import { REDIS_EXPIRE } from '@app/shared/define/const';

@Injectable()
export class UserWalletService {
  logger = new Logger(UserWalletService.name);

  constructor(
    @InjectRedis() private readonly redis: Redis,
    private readonly prismaService: PrismaService,
  ) {}

  async create(
    createUserWalletDtos: CreateUserWalletRequestDto[],
  ): Promise<CreateUserWalletResponseDto[]> {
    try {
      const ethDtos = createUserWalletDtos.filter(
        (dto) => dto.wallet_type === ChainTypeEnum.Ethereum.code,
      );
      if (!ethDtos.length) {
        throw new BadRequestException('ETH wallet is required');
      }

      const ethWallet = await this.prismaService.userWallet.findFirst({
        where: {
          address: ethDtos[0].address,
          wallet_type: ethDtos[0].wallet_type,
        },
      });
      if (ethWallet) {
        const wallets = await this.findByUser(ethWallet.user_id);
        const existingWallets = wallets.map((wallet) => wallet.address);
        const walletsToUpdate = createUserWalletDtos.filter(
          (dto) => !existingWallets.includes(dto.address),
        );
        if (!walletsToUpdate.length) {
          return plainToInstance(CreateUserWalletResponseDto, wallets);
        }

        await this.prismaService.userWallet.createMany({
          data: walletsToUpdate.map((dto) => ({
            ...dto,
            user_id: ethWallet.user_id,
          })),
        });
        await this.redis.del(USER_WALLET.concat(ethWallet.user_id));
        return plainToInstance(
          CreateUserWalletResponseDto,
          await this.findByUser(ethWallet.user_id),
        );
      }

      const user_id = uuidv4();
      await this.prismaService.userWallet.createMany({
        data: createUserWalletDtos.map((dto) => ({
          ...dto,
          user_id,
        })),
      });

      return plainToInstance(
        CreateUserWalletResponseDto,
        await this.findByUser(user_id),
      );
    } catch (error) {
      this.logger.error(`Error creating user wallets: ${error}`);
      throw error;
    }
  }

  async findByUser(userID: string): Promise<PageUserWalletResponseDto[]> {
    this.logger.log(`findByUser ${userID}`);
    const key = USER_WALLET.concat(userID);
    try {
      const wallets = await this.redis.get(key);
      if (wallets) {
        const parsedWallets = JSON.parse(wallets);
        if (Array.isArray(parsedWallets)) {
          return plainToInstance(
            PageUserWalletResponseDto,
            parsedWallets,
          ) as PageUserWalletResponseDto[];
        } else {
          throw new Error('Parsed data is not an array.');
        }
      }

      const walletDBs = await this.prismaService.userWallet.findMany({
        where: { user_id: userID },
      });
      await this.redis.set(key, JSON.stringify(walletDBs));
      await this.redis.expire(key, REDIS_EXPIRE);
      return plainToInstance(PageUserWalletResponseDto, walletDBs);
    } catch (error) {
      this.logger.error(`Error fetching user wallets: ${error}`);
      throw error;
    }
  }

  findAll() {
    return `This action returns all userWallet`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userWallet`;
  }

  update(id: number, updateUserWalletDto: UpdateUserWalletDto) {
    return `This action updates a #${id} userWallet`;
  }

  remove(id: number) {
    return `This action removes a #${id} userWallet`;
  }
}
