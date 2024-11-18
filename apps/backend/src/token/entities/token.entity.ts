import {
  IsString,
  IsDate,
  IsUUID,
  IsUrl,
  IsInt,
  IsBoolean,
  Min,
  MinLength,
} from 'class-validator';
import { Exclude, Expose, Type } from 'class-transformer';

@Exclude()
export class TokenInfo {
  @Expose()
  @IsUUID()
  id: string;

  @Expose()
  @IsString()
  @MinLength(1)
  chain_id: string;

  @Expose()
  @IsString()
  @MinLength(1)
  token_symbol: string;

  @Expose()
  @IsString()
  @MinLength(1)
  token_name: string;

  @Expose()
  @IsString()
  @IsUrl()
  token_icon: string;

  @Expose()
  @IsString()
  contract_address: string;

  @Expose()
  @IsInt()
  @Min(0)
  token_decimals: number;

  @Expose()
  @IsBoolean()
  is_native: boolean;

  @Expose()
  @IsInt()
  @Min(1)
  coin_market_cap_id: number;

  @Expose()
  @Type(() => Date)
  @IsDate()
  created_at: Date;

  @Expose()
  @Type(() => Date)
  @IsDate()
  updated_at: Date;

  constructor(data: Partial<TokenInfo>) {
    this.id = data.id || '';
    this.chain_id = data.chain_id || '';
    this.token_symbol = data.token_symbol || '';
    this.token_name = data.token_name || '';
    this.token_icon = data.token_icon || '';
    this.contract_address = data.contract_address || '';
    this.token_decimals = data.token_decimals || 0;
    this.is_native = data.is_native || false;
    this.coin_market_cap_id = data.coin_market_cap_id || 0;
    this.created_at = data.created_at || new Date();
    this.updated_at = data.updated_at || new Date();
  }
}
