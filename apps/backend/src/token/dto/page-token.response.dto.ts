import {
  IsBoolean,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  Min,
  MinLength,
} from 'class-validator';
import { TokenInfo } from '../entities/token.entity';
import { Exclude, Expose, Transform } from 'class-transformer';

@Exclude()
export class PageTokenResponseDto {
  @Expose()
  tokens: PageTokenDto[];
}

@Exclude()
export class PageTokenDto {
  @Expose()
  @IsString()
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
  @IsBoolean()
  is_multiple_chain: boolean;

  @Expose()
  @IsInt()
  @Min(1)
  coin_market_cap_id: number;

  @Expose()
  @Transform(({ obj }) => obj.chain?.wallet_type)
  wallet_type: number;
}
