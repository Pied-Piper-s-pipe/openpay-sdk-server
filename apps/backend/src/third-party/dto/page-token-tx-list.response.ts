import { Exclude, Expose, Transform, Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

@Exclude()
export class PageTokenTxListResponse {
  @IsString()
  @IsOptional()
  page_key?: string;

  @IsArray()
  @Type(() => TokenTransaction) // 确保 transactions 数组中的每个元素都是 TokenTransaction 实例
  transactions: TokenTransaction[];
}

@Exclude()
export class TokenTransaction {
  @Expose()
  category: string;

  @Expose()
  block_number: string;

  @Expose()
  @Transform(({ value }) => value || '')
  block_hash?: string;

  @Expose()
  transaction_hash: string;

  @Expose()
  transaction_index: string;

  @Expose()
  from_address: string[];

  @Expose()
  to_address: string[];

  @Expose()
  amount: string;

  @Expose()
  gas_used: string;

  @Expose()
  gas_price: string;

  @Expose()
  token_name: string;

  @Expose()
  @Transform(({ value }) => value || 0)
  status: number;

  @Expose()
  @Transform(({ value }) => value || '')
  contract_address: string;

  @Expose()
  @Transform(({ value }) => value || 0)
  decimal: number;

  @Expose()
  @Transform(({ obj }) =>
    obj.metadata?.blockTimestamp
      ? Date.parse(obj.metadata.blockTimestamp).toString()
      : '',
  )
  block_timestamp: string;

  @Expose()
  erc721_token_id: string;

  @Expose()
  transaction_type: number;
}
