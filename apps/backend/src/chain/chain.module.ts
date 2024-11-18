import { Module } from '@nestjs/common';
import { ChainService } from './chain.service';
import { ChainController } from './chain.controller';
import { NodeModule } from '@backend/node/node.module';
import { TokenModule } from '@backend/token/token.module';
import { SharedModule } from '@app/shared/shared.module';

@Module({
  imports: [NodeModule, TokenModule, SharedModule],
  controllers: [ChainController],
  providers: [ChainService],
})
export class ChainModule {}
