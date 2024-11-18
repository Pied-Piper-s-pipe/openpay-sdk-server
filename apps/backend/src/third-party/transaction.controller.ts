import {
  BadRequestException,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { PageTokenTxListRequestDto } from './dto/page-token-tx-list.request';
import { TransactionService } from './transaction.service';
import {
  ChainTypeEnum,
  getChainTypeByCode,
} from '@app/shared/define/chain.enum';
import { TransactionReceiptRequest } from './dto/transaction-receipt.request';

@Controller('transactions')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Get()
  async page(@Query() query: PageTokenTxListRequestDto) {
    const chain = getChainTypeByCode(query.wallet_type);
    if (!chain) {
      throw new BadRequestException('Invalid wallet type');
    }
    query.chainShortName = chain.name;
    return await this.transactionService.page(query);
  }

  @Get(':id')
  async findOne(
    @Param('id') id: string,
    @Query('wallet_type') wallet_type: number,
  ) {
    const chain = getChainTypeByCode(wallet_type);
    if (!chain) {
      throw new BadRequestException('Invalid wallet type');
    }
    const req: TransactionReceiptRequest = {
      txid: id,
      chainShortName: chain.name,
    };
    return await this.transactionService.details(req);
  }
}
