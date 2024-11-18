import { GATEWAY_PORT } from '@app/shared/define/env.name';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { WsAdapter } from '@nestjs/platform-ws';

import { GatewayModule } from './gateway.module';
import { SharedService } from '@app/shared/shared.service';
import { COIN_PRICE_PUSH_QUEUE } from '@app/shared/define/const';
import { CustomAdapter } from './msg/msg.wsadapter';
import { WinstonModule } from 'nest-winston';
import { instance } from '@app/shared/logs/log-configuration';

async function bootstrap() {
  const logger = new Logger('bootstrap');
  const app = await NestFactory.create(GatewayModule, {
    logger: WinstonModule.createLogger({
      instance,
    }),
  });

  const configService = app.get<ConfigService>(ConfigService);
  const sharedService = app.get<SharedService>(SharedService);

  const gatewayRmqOptions = sharedService.getRmqOptions(
    COIN_PRICE_PUSH_QUEUE,
    '',
    10,
  );

  const microserviceApp =
    await NestFactory.createMicroservice<MicroserviceOptions>(
      GatewayModule,
      gatewayRmqOptions,
    );

  await microserviceApp.listen();

  const port: number = configService.get<number>(GATEWAY_PORT);
  app.useWebSocketAdapter(new CustomAdapter(app, port));

  logger.log(`gateway listen port: ${port}`);
  await app.listen(3000);
}
bootstrap();
