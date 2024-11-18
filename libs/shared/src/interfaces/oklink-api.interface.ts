export interface GetAddressTokenTxListRequest {
  chainShortName: string;
  tokenContractAddress: string;
  address: string;
  protocolType: string;
  page: string;
  limit: string;
}

export interface GetAddressTokenTxListResponse {
  transactionList: AddressTokenTxInfo[];
  limit: string;
  page: string;
  totalPage: string;
}

export interface AddressTokenTxInfo {
  txId: string;
  blockHash: string;
  height: string;
  transactionTime: string;
  from: string;
  to: string;
  tokenContractAddress: string;
  tokenId: string;
  amount: string;
  symbol: string;
  isFromContract: boolean;
  isToContract: boolean;
}
