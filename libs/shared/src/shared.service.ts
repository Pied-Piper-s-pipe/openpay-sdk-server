import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { RedisOptions, RmqOptions, Transport } from '@nestjs/microservices';
import { RABBITMQ_URL, REDIS_URL } from './define/env.name';

@Injectable()
export class SharedService {
  constructor(@Inject(ConfigService) private readonly configService) {}

  getRedisOptions(): RedisOptions {
    const redisUrl = this.configService.get(REDIS_URL);
    const url = new URL(redisUrl);
    console.log(`redis url: ${url}`);
    const options = {
      host: url.hostname,
      port: parseInt(url.port),
      password: url.password,
      db: Number(url.pathname.split('/')[1]),
      retryAttempts: 5,
      retryDelay: 1000,
    };
    console.log(`options: ${JSON.stringify(options)}`);
    return {
      transport: Transport.REDIS,
      options: options,
    };
  }

  getRmqOptions(
    queue: string,
    routingKey: string,
    prefechCount: number,
  ): RmqOptions {
    const rabbitmqUrl = this.configService.get(RABBITMQ_URL);
    return {
      transport: Transport.RMQ,
      options: {
        urls: [rabbitmqUrl],
        // ! https://github.com/nestjs/nest/issues/11966#issuecomment-1619720279
        // noAck: false,
        persistent: true,
        queue: queue,
        queueOptions: {
          durable: true,
          routingKey: routingKey,
          prefetchCount: prefechCount,
        },
      },
    };
  }
}
