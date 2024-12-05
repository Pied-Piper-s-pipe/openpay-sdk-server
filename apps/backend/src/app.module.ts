import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedModule } from '@app/shared/shared.module';
import { ChainModule } from './chain/chain.module';
import { TokenModule } from './token/token.module';
import { NodeModule } from './node/node.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { GlobalLoggerInterceptor } from '@app/shared/logs/global-logger-interceptor';
import { TransactionController } from './third-party/transaction.controller';
import { TransactionService } from './third-party/transaction.service';
import { NftController } from './nft/nft.controller';
import { NftService } from './nft/nft.service';
import { UserWalletModule } from './user-wallet/user-wallet.module';
import { CacheControlMiddleware } from '@app/shared/middleware/cache-control-middleware';

@Module({
  imports: [
    SharedModule,
    ChainModule,
    TokenModule,
    NodeModule,
    UserWalletModule,
  ],
  controllers: [AppController, TransactionController, NftController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR, // 使用 NestJS 的 APP_INTERCEPTOR
      useClass: GlobalLoggerInterceptor, // 使用 GlobalGuard
    },
    TransactionService,
    NftService,
  ],
})
export class AppModule {}
