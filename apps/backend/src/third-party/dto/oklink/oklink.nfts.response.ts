export class OklinkNftsResponse {
  page: string;
  limit: string;
  totalPage: string;
  tokenList: Token[];

  constructor(data: any) {
    this.page = data.page;
    this.limit = data.limit;
    this.totalPage = data.totalPage;
    this.tokenList = data.tokenList.map((token: any) => new Token(token));
  }
}

class Token {
  tokenContractAddress: string;
  tokenId: string;
  protocolType: string;
  amount: string;
  token: string;
  logoUrl: string;

  constructor(data: any) {
    this.tokenContractAddress = data.tokenContractAddress;
    this.tokenId = data.tokenId;
    this.protocolType = data.protocolType;
    this.amount = data.amount;
    this.token = data.token;
    this.logoUrl = data.logoUrl;
  }
}
