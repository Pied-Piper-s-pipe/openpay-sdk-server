import { Exclude, Expose } from 'class-transformer';
import { IsOptional } from 'class-validator';

@Exclude()
export class GeneralWsResp {
  @Expose()
  @IsOptional()
  reqIdentifier?: number;

  @Expose()
  @IsOptional()
  errCode?: number;

  @Expose()
  @IsOptional()
  errMsg?: string;

  @Expose()
  @IsOptional()
  msgIncr?: string;

  @Expose()
  @IsOptional()
  operationID?: string;

  @Expose()
  @IsOptional()
  data?: any;

  toString(): string {
    // {{ edit_1 }}
    return `{
      reqIdentifier: ${this.reqIdentifier},
      errCode: ${this.errCode},
      errMsg: '${this.errMsg}',
      msgIncr: '${this.msgIncr}',
      operationID: '${this.operationID}',
      data: ${this.data} // 这里假设 data 可以直接转换为字符串
    }`;
  }
}

@Exclude()
export class GeneralWsReq {
  @Expose()
  @IsOptional()
  reqIdentifier?: number;

  @Expose()
  @IsOptional()
  token?: string;

  @Expose()
  @IsOptional()
  sendID?: string;

  @Expose()
  @IsOptional()
  msgIncr?: string;

  @Expose()
  @IsOptional()
  operationID?: string;

  @Expose()
  @IsOptional()
  data?: Buffer;
}

@Exclude()
export class PriceData {
  @Expose()
  id: string;

  @Expose()
  price: string;

  @Expose()
  token_symbol: string;

  @Expose()
  percent_change_1h: string;

  @Expose()
  percent_change_24h: string;
}

export function generateGeneralWsRespBuffer(data: PriceData) {
  const generalWsResp: GeneralWsResp = {
    data: data,
    reqIdentifier: 2001,
    errCode: 0,
    errMsg: '',
    msgIncr: '',
    operationID: new Date().getTime().toString(),
  };
  return Buffer.from(JSON.stringify(generalWsResp));
}
