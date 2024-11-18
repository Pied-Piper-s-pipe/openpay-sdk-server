import { BaseResponse } from '@app/shared/define/oklink.api';
import { Exclude, Expose, Type } from 'class-transformer';

@Exclude()
export class AddresssTokenTxList extends BaseResponse {
  @Expose({ name: 'transactionLists' })
  @Type(() => AddressTokenTx)
  transactionLists?: AddressTokenTx[];
}

@Exclude()
export class AddressTokenTx {
  @Expose({ name: 'txId' })
  txId: string = '';

  @Expose({ name: 'blockHash' })
  blockHash: string = '';

  @Expose({ name: 'height' })
  height: string = '';

  @Expose({ name: 'transactionTime' })
  transactionTime: string = '';

  @Expose({ name: 'from' })
  from: string = '';

  @Expose({ name: 'to' })
  to: string = '';

  @Expose({ name: 'tokenContractAddress' })
  tokenContractAddress: string = '';

  @Expose({ name: 'tokenId' })
  tokenId: string = '';

  @Expose({ name: 'amount' })
  amount: string = '';

  @Expose({ name: 'symbol' })
  symbol: string = '';

  @Expose({ name: 'isFromContract' })
  isFromContract: boolean = false;

  @Expose({ name: 'isToContract' })
  isToContract: boolean = false;

  @Expose({ name: 'txFee' })
  txFee: string = '';

  @Expose({ name: 'state' })
  state: string = '';
}
