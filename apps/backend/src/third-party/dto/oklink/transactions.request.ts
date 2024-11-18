export interface TransactionsRequest {
  chainShortName: string;
  tokenContractAddress: string;
  address: string;
  protocolType: string;
  page: string;
  limit: string;
  startBlock: string;
  endBlock: string;
}
