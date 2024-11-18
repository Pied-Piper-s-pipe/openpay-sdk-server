export interface CoinpriceMqEvent {
  id: string;
  price: string;
  token_symbol: string;
  percent_change_1h: string;
  percent_change_24h: string;
}
