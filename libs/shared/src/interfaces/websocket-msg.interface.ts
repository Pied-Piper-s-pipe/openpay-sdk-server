export interface MsgRegisterClientReq {
  type: string;
  address: string;
  device: string;
}

export interface MsgRegisterClientResp {
  type: string;
  address: string;
  device: string;
  message: string;
}

export interface MsgCoinPriceChangedResp {
  type: string;
  prices: CoinPriceEvent[];
}

export interface CoinPriceEvent {
  id: string;
  price: string;
  percent_change_1h: string;
  percent_change_24h: string;
}
