import { IsNotEmpty } from 'class-validator';

export class GetBlockHeightByTimeResponse {
  blocks: BlockWithTime[];
}

export class BlockWithTime {
  @IsNotEmpty()
  height: string;

  @IsNotEmpty()
  blockTime: string;
}
