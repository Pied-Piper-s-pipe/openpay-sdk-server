import { IsNotEmpty, IsString } from 'class-validator';

export class TransactionReceiptRequest {
  @IsString()
  @IsNotEmpty()
  txid: string;

  @IsString()
  @IsNotEmpty()
  chainShortName: string;
}
