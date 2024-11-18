import { Transform, Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class PageTokenTxListRequestDto {
  @IsNumber()
  @Transform(({ value }) => Number(value))
  @IsOptional()
  wallet_type?: number;

  @IsString()
  @IsOptional()
  category?: string;

  @IsString()
  @IsOptional()
  contract_address?: string;

  @IsString()
  @IsOptional()
  from_address?: string;

  @IsString()
  @IsOptional()
  to_address?: string;

  @IsString()
  @IsOptional()
  from_block?: string;

  @IsString()
  @IsOptional()
  to_block?: string;

  @IsString()
  @IsOptional()
  page?: string;

  @IsString()
  @IsOptional()
  limit?: string;

  @IsString()
  @IsOptional()
  page_key?: string;

  chainShortName?: string;

  @IsNumber()
  @Type(() => Number)
  @IsOptional()
  start_time?: number;

  @IsNumber()
  @Type(() => Number)
  @IsOptional()
  end_time?: number;
}
