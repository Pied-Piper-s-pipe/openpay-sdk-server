import { Exclude, Expose } from 'class-transformer';
import { IsString } from 'class-validator';

@Exclude()
export class PageUserBalanceHistoryResponseDto {
  @Expose()
  @IsString()
  user_id: string;

  @Expose()
  @IsString()
  count_date: string;

  @Expose()
  @IsString()
  assert: string;
}
