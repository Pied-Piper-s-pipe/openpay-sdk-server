import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { ScheduleModule } from '@nestjs/schedule';
import { SharedModule } from '@app/shared/shared.module';
import { AssertTaskService } from './assert/assert.task.service';
import { DataClearTaskService } from './assert/data-clear-task.service';
import { CurrentCoinPriceService } from './assert/current-coin-price.service';
import { TaskService } from './task.service';
import { QueryTokenBalanceService } from './assert/query-token-balance.service';

@Module({
  imports: [SharedModule, ScheduleModule.forRoot()],
  controllers: [TaskController],
  providers: [
    AssertTaskService,
    //DataClearTaskService,
    CurrentCoinPriceService,
    QueryTokenBalanceService,
    //TaskService,
  ],
})
export class TaskModule {}
