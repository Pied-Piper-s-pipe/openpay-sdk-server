import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { SharedService } from '@app/shared/shared.service';
import { COIN_PRICE_PUSH_QUEUE } from '@app/shared/define/const';
import { ConfigService } from '@nestjs/config';
import { TASK_PORT } from '@app/shared/define/env.name';
import { WinstonModule } from 'nest-winston';
import { instance } from '@app/shared/logs/log-configuration';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({
      instance,
    }),
  });
  const configService = app.get<ConfigService>(ConfigService);
  const sharedService = app.get<SharedService>(SharedService);

  const rmqOptions = sharedService.getRmqOptions(COIN_PRICE_PUSH_QUEUE, '', 10);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: rmqOptions as any,
  });
  const port: number = configService.get<number>(TASK_PORT);

  await app.startAllMicroservices();
  await app.listen(port);
}
bootstrap();
