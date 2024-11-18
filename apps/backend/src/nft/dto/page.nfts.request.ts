import { Exclude, Expose, Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

@Exclude()
export class PageNftsForOwnerRequest {
  @Expose({ name: 'page' })
  @IsString()
  @IsOptional()
  page?: string;

  @Expose({ name: 'limit' })
  @IsString()
  @IsOptional()
  limit?: string;

  @Expose({ name: 'page_key' })
  @IsString()
  @IsOptional()
  page_key?: string;

  @Expose({ name: 'wallet_type' })
  @IsNumber()
  @Type(() => Number)
  @IsNotEmpty()
  wallet_type: number;

  @Expose({ name: 'contract_address' })
  @IsString()
  @IsOptional()
  contract_address?: string;

  @Expose({ name: 'owner' })
  @IsString()
  @IsNotEmpty()
  owner: string;
}
