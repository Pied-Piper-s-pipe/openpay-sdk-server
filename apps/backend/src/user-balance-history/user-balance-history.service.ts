import { PrismaService } from '@app/shared/prisma/prisma.service';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { PageUserBalanceHistoryRequestDto } from './dto/page-user-balance-history.request';
import { PageUserBalanceHistoryResponseDto } from './dto/page-user-balance-history.response';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class UserBalanceHistoryService {
  private readonly logger = new Logger(UserBalanceHistoryService.name);

  constructor(@Inject() private readonly prismaService: PrismaService) {}

  async page(
    req: PageUserBalanceHistoryRequestDto,
  ): Promise<PageUserBalanceHistoryResponseDto[]> {
    try {
      const result = await this.prismaService.userBalanceHistory.findMany({
        select: {
          count_date: true,
          assert: true,
        },
        where: {
          user_id: req.user_id,
        },
      });

      return plainToInstance(PageUserBalanceHistoryResponseDto, result);
    } catch (error) {
      this.logger.error(error);
      throw new Error(
        'Unable to fetch user balance history. Please try again later.',
      );
    }
  }
}
