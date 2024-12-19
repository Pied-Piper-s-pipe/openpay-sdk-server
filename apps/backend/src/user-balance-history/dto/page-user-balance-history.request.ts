import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class PageUserBalanceHistoryRequestDto {
  @IsString()
  @IsNotEmpty()
  user_id: string;
}
