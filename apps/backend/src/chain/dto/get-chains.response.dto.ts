import { Exclude, Expose } from 'class-transformer';
import {
  IsNumber,
  IsOptional,
  IsString,
  Min,
  MinLength,
} from 'class-validator';

@Exclude()
export class GetChainsResponseDto {
  @Expose()
  @IsString()
  @MinLength(1)
  chain_id: string;

  @IsNumber()
  @Min(0)
  @Expose()
  wallet_type: number;

  @IsString()
  @MinLength(1)
  @Expose()
  chain_name: string;

  @IsString()
  @IsOptional()
  @Expose()
  chain_icon: string;
}
