export class RawContract {
  value: string;
  address: string;
  decimal: string;

  constructor(value: string, address: string, decimal: string) {
    this.value = value;
    this.address = address;
    this.decimal = decimal;
  }
}

export class Metadata {
  blockTimestamp: string;

  constructor(blockTimestamp: string) {
    this.blockTimestamp = blockTimestamp;
  }
}

export class Transaction {
  blockNum: string;
  uniqueId: string;
  hash: string;
  from: string;
  to: string;
  value: number;
  erc721TokenId: string | null;
  erc1155Metadata: string | null;
  tokenId: string | null;
  asset: string;
  category: string;
  rawContract: RawContract;
  metadata: Metadata;

  constructor(
    blockNum: string,
    uniqueId: string,
    hash: string,
    from: string,
    to: string,
    value: number,
    erc721TokenId: string | null,
    erc1155Metadata: string | null,
    tokenId: string | null,
    asset: string,
    category: string,
    rawContract: RawContract,
    metadata: Metadata,
  ) {
    this.blockNum = blockNum;
    this.uniqueId = uniqueId;
    this.hash = hash;
    this.from = from;
    this.to = to;
    this.value = value;
    this.erc721TokenId = erc721TokenId;
    this.erc1155Metadata = erc1155Metadata;
    this.tokenId = tokenId;
    this.asset = asset;
    this.category = category;
    this.rawContract = rawContract;
    this.metadata = metadata;
  }
}

export class AssertTransfersResponse {
  transfers: Transaction[];
  pageKey?: string;
}
