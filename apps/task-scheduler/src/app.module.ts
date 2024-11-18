import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedModule } from '@app/shared/shared.module';
import { TaskModule } from './task/task.module';

@Module({
  imports: [SharedModule, TaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
