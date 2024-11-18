import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { Cron, CronExpression } from '@nestjs/schedule';
import { TaskService } from './task/task.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
}
