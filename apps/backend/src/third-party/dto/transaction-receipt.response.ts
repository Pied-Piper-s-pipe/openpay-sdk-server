import {
  Exclude,
  Expose,
  plainToInstance,
  Transform,
  Type,
} from 'class-transformer';

class TokenTransferDetail {
  @Expose()
  token: string;

  @Expose({ name: 'tokenContractAddress' })
  token_contract_address: string;

  @Expose()
  symbol: string;

  @Expose()
  from: string;

  @Expose()
  to: string;

  @Expose()
  tokenId: string;

  @Expose()
  amount: string;

  @Expose()
  isFromContract: boolean;

  @Expose()
  isToContract: boolean;
}

@Exclude()
export class TransactionReceiptResponse {
  @Expose()
  @Transform(({ value }) => value || '')
  category: string;

  @Expose({ name: 'height' })
  block_number: string;

  @Expose()
  @Transform(({ value }) => value || '')
  block_hash?: string;

  @Expose({ name: 'txid' })
  transaction_hash: string;

  @Expose({ name: 'index' })
  transaction_index: string;

  @Expose()
  @Transform(({ obj }) => {
    return obj.inputDetails.map((detail) => detail.inputHash);
  })
  from_address: string[];

  @Expose({ name: 'to_address' })
  @Transform(({ obj }) => {
    return obj.outputDetails.map((detail) => detail.outputHash);
  })
  to_address: string;

  @Expose({ name: 'amount' })
  amount: string;

  @Expose({ name: 'gasUsed' })
  gas_used: string;

  @Expose({ name: 'gasPrice' })
  gas_price: string;

  @Expose({ name: 'transactionSymbol' })
  token_name: string;

  @Expose({ name: 'status' })
  @Transform(({ value }) => value || 0)
  status: number;

  @Expose()
  @Transform(({ value }) => value || '')
  contract_address: string;

  @Expose()
  @Transform(({ value }) => value || 0)
  decimal: number;

  @Expose()
  @Transform(({ obj }) => obj.transactionTime || '')
  block_timestamp: string;

  @Expose()
  @Transform(({ value }) => value || '')
  erc721_token_id: string;

  @Expose({ name: 'tokenTransferDetails' })
  @Type(() => TokenTransferDetail) // 使用 Type 装饰器进行类型转换
  token_transfer_details: TokenTransferDetail[]; // 添加 tokenTransferDetails 属性

  state?: string;
}

class InputDetail {
  inputHash?: string;
  isContract?: string;
  amount?: string;
}

class OutDetail {
  outputHash?: string;
  isContract?: string;
  amount?: string;
}
