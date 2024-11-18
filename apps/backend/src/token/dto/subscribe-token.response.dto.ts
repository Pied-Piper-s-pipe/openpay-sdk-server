import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class SubscribeTokenResponseDto {
  token_ids: string[];

  @IsString()
  @IsNotEmpty()
  address: string;
}
