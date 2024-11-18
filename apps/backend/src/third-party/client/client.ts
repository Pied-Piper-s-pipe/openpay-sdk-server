import { GetBlockHeightByTimeRequest } from '../dto/get.block.request';
import { GetBlockHeightByTimeResponse } from '../dto/get.block.response';
import { PageTokenTxListRequestDto } from '../dto/page-token-tx-list.request';
import { PageTokenTxListResponse } from '../dto/page-token-tx-list.response';
import { TransactionReceiptRequest } from '../dto/transaction-receipt.request';
import { TransactionReceiptResponse } from '../dto/transaction-receipt.response';
import { PageNftsForOwnerRequest } from '@backend/nft/dto/page.nfts.request';
import { PageNftsForOwnerResponse } from '@backend/nft/dto/page.nfts.response';

export interface Client {
  //查询地址代理交易列表
  getAddressTxList(
    req: PageTokenTxListRequestDto,
  ): Promise<PageTokenTxListResponse>;

  getTransactionDetail(
    req: TransactionReceiptRequest,
  ): Promise<TransactionReceiptResponse>;

  getNftForOwner(
    req: PageNftsForOwnerRequest,
  ): Promise<PageNftsForOwnerResponse>;

  getBlockHeightByTime(
    req: GetBlockHeightByTimeRequest,
  ): Promise<GetBlockHeightByTimeResponse>;
}
