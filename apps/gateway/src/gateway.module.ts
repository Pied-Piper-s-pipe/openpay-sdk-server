import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MsgController } from './msg/msg.controller';
import { MsgGateway } from './msg/msg.gateway';
import { MsgService } from './msg/msg.service';
import { SharedModule } from '@app/shared/shared.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { GlobalLoggerInterceptor } from '@app/shared/logs/global-logger-interceptor';

@Module({
  imports: [SharedModule],
  controllers: [AppController, MsgController],
  providers: [
    AppService,
    MsgGateway,
    MsgService,
    {
      provide: APP_INTERCEPTOR, // 使用 NestJS 的 APP_INTERCEPTOR
      useClass: GlobalLoggerInterceptor, // 使用 GlobalGuard
    },
  ],
})
export class GatewayModule {}
