import { Exclude, Expose } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

@Exclude()
export class PageUserWalletResponseDto {
  @IsString()
  @IsNotEmpty()
  @Expose()
  address: string;

  @IsNumber()
  @IsNotEmpty()
  @Expose()
  wallet_type: number;

  @IsString()
  @IsNotEmpty()
  @Expose()
  user_id: string;
}
