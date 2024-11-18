import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SharedService } from 'libs/shared/src/shared.service';
import { MicroserviceOptions } from '@nestjs/microservices';
import { BACKEND_PORT } from 'libs/shared/src/define/env.name';
import { COIN_PRICE_PUSH_QUEUE } from '@app/shared/define/const';
import { WinstonModule } from 'nest-winston';
import { instance } from '@app/shared/logs/log-configuration';
import { initializeClients } from './third-party/client';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({
      instance,
    }),
  });
  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(new ValidationPipe({ transform: true })); // 启用 transform 以应用默认值
  const logger = new Logger('bootstrap');

  const configService = app.get<ConfigService>(ConfigService);
  const sharedService = app.get<SharedService>(SharedService);

  initializeClients(configService);

  // const gatewayRmqOptions = sharedService.getRmqOptions(
  //   COIN_PRICE_PUSH_QUEUE,
  //   '',
  //   10,
  // );

  // const microserviceApp =
  //   await NestFactory.createMicroservice<MicroserviceOptions>(
  //     AppModule,
  //     gatewayRmqOptions,
  //   );

  // await microserviceApp.listen();

  const port: number = configService.get<number>(BACKEND_PORT);
  logger.log(`backend listen port: ${port}`);

  await app.listen(port);
}
bootstrap();
