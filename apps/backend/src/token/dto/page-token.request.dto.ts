import { Type } from 'class-transformer';
import { IsInt, IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class PageTokenRequestDto {
  //   @IsNumber()
  //   @Type(() => Number) // 将字符串转换为数字
  //   @IsOptional()
  //   page: number = 1;

  //   @IsNumber()
  //   @Type(() => Number) // 将字符串转换为数字
  //   @IsOptional()
  //   limit: number = 10;

  @IsString()
  @IsOptional()
  chain_id?: string;

  @IsNumber()
  @Type(() => Number)
  @IsOptional()
  wallet_type?: number;
}
