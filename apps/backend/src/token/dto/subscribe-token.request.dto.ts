import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class SubscribeTokenReqeustDto {
  @IsNotEmpty()
  token_ids: string[];

  @IsString()
  @IsNotEmpty()
  user_id: string;
}

export class UnsubscribeTokenReqeustDto {
  @IsNotEmpty()
  token_ids: string[];

  @IsString()
  @IsNotEmpty()
  user_id: string;
}
