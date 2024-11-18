import { Injectable } from '@nestjs/common';
import { PageTokenTxListRequestDto } from './dto/page-token-tx-list.request';
import { PageTokenTxListResponse } from './dto/page-token-tx-list.response';
import { getClientByChainName, getClientByChainType } from './client';
import { TransactionReceiptRequest } from './dto/transaction-receipt.request';
import { TransactionReceiptResponse } from './dto/transaction-receipt.response';
import { getChainTypeByCode } from '@app/shared/define/chain.enum';

@Injectable()
export class TransactionService {
  async page(req: PageTokenTxListRequestDto): Promise<PageTokenTxListResponse> {
    const client = getClientByChainType(req.wallet_type);
    if (req.start_time && req.end_time) {
      const chain = getChainTypeByCode(req.wallet_type);
      const startBlock = await client.getBlockHeightByTime({
        chainShortName: chain.name,
        time: req.start_time,
      });
      if (startBlock && startBlock.blocks.length > 0) {
        req.from_block = startBlock.blocks[0].height;
      }

      const endBlock = await client.getBlockHeightByTime({
        chainShortName: chain.name,
        time: req.end_time,
      });
      if (endBlock && endBlock.blocks.length > 0) {
        req.to_block = endBlock.blocks[0].height;
      }
    }
    return client.getAddressTxList(req);
  }

  async details(
    req: TransactionReceiptRequest,
  ): Promise<TransactionReceiptResponse> {
    const client = getClientByChainName(req.chainShortName);
    return client.getTransactionDetail(req);
  }
}
