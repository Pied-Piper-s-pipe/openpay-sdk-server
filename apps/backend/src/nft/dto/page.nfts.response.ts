import { Exclude, Expose, Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

@Exclude()
export class Contract {
  @Expose()
  @IsString()
  address: string;

  @Expose()
  @IsString()
  name: string;

  @Expose()
  @IsString()
  symbol: string;

  @Expose()
  @IsNumber()
  total_supply: number;

  @Expose()
  @IsString()
  token_type: string;
}

@Exclude()
export class Nft {
  @Expose()
  @IsNumber()
  wallet_type: number;

  @Expose()
  contract: Contract;

  @Expose()
  @IsString()
  token_id: string;

  @Expose()
  @IsString()
  token_type: string;

  @Expose()
  @IsString()
  name: string;

  @Expose()
  @IsString()
  description: string;

  @Expose()
  @IsString()
  token_uri: string;

  @Expose()
  @IsString()
  image_url: string;
}

@Exclude()
export class PageNftsForOwnerResponse {
  @Expose({ name: 'page_key' })
  @IsString()
  page_key: string;

  @Expose({ name: 'nfts' })
  @Type(() => Nft)
  nfts: Nft[];
}
