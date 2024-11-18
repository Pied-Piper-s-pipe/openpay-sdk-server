import { Module } from '@nestjs/common';
import { SharedService } from './shared.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RedisModule } from '@nestjs-modules/ioredis';
import { REDIS_URL } from './define/env.name';
import configuration from './yaml-configuration';
import { PrismaService } from './prisma/prisma.service';
import { GlobalLoggerInterceptor } from './logs/global-logger-interceptor';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    RedisModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'single',
        url: configService.get(REDIS_URL),
      }),
    }),
  ],
  controllers: [],
  providers: [SharedService, PrismaService, GlobalLoggerInterceptor],
  exports: [SharedService, PrismaService, GlobalLoggerInterceptor],
})
export class SharedModule {}
