import { IsNotEmpty } from 'class-validator';

export class GetBlockHeightByTimeRequest {
  @IsNotEmpty()
  chainShortName: string;

  @IsNotEmpty()
  time: number;
}
