import { IsString, IsDate, IsUUID, IsUrl, MinLength } from 'class-validator';
import { Expose, Type } from 'class-transformer';

export class NodeInfo {
  @Expose()
  @IsUUID()
  id: string;

  @Expose()
  @IsString()
  @MinLength(1)
  chain_id: string;

  @Expose()
  @IsString()
  @IsUrl()
  node_url: string;

  @Expose()
  @Type(() => Date)
  @IsDate()
  created_at: Date;

  @Expose()
  @Type(() => Date)
  @IsDate()
  updated_at: Date;
}
