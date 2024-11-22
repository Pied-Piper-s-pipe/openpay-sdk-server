import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { ScheduleModule } from '@nestjs/schedule';
import { SharedModule } from '@app/shared/shared.module';

@Module({
  imports: [SharedModule, ScheduleModule.forRoot()],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
