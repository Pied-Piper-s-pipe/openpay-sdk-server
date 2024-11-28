import { Exclude, Expose } from 'class-transformer';
import { IsString, MinLength } from 'class-validator';

@Exclude()
export class GetNodeByChainResponseDto {
  @Expose()
  @IsString()
  @MinLength(1)
  chain_id: string;

  @Expose()
  node_urls: string[];

  @Expose()
  wallet_type: number;
}
