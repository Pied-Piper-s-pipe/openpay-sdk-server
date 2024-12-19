import { PrismaService } from '@app/shared/prisma/prisma.service';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class DataClearTaskService {
  logger = new Logger(DataClearTaskService.name);

  constructor(@Inject() private readonly prismaService: PrismaService) {}

  @Cron(CronExpression.EVERY_DAY_AT_1AM)
  async clearUserBalanceHistories() {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    await this.prismaService.userBalanceHistory.deleteMany({
      where: {
        created_at: {
          lt: sevenDaysAgo,
        },
      },
    });
    this.logger.log(`已清除7天以前的user_balance_histories数据`);
  }
}
