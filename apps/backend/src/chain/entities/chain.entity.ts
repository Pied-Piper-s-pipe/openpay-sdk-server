import { NodeInfo } from '@backend/node/entities/node.entity';
import { TokenInfo } from '@backend/token/entities/token.entity';
import {
  IsString,
  IsNumber,
  IsDate,
  IsUUID,
  IsArray,
  IsOptional,
  MinLength,
  IsUrl,
  Min,
  Max,
  ArrayMinSize,
} from 'class-validator';

export class ChainInfo {
  @IsUUID()
  id: string;

  @IsString()
  @MinLength(1)
  chain_id: string;

  @IsNumber()
  @Min(0)
  wallet_type: number;

  @IsString()
  @MinLength(1)
  chain_name: string;

  @IsString()
  @IsUrl()
  chain_icon: string;

  @IsNumber()
  @Min(1)
  @Max(2)
  status_type: number;

  @IsDate()
  created_at: Date;

  @IsDate()
  updated_at: Date;

  @IsOptional()
  @IsArray()
  @ArrayMinSize(0)
  nodes?: NodeInfo[];

  @IsOptional()
  @IsArray()
  @ArrayMinSize(0)
  tokens?: TokenInfo[];
}
