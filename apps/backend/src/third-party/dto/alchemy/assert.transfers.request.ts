export class AssertTransfersRequest {
  fromBlock?: string;
  toBlock?: string;
  toAddress?: string;
  category?: string[];
  order?: string;
  withMetadata?: boolean;
  excludeZeroValue?: boolean;
  maxCount?: string;
  fromAddress?: string;
  contractAddresses?: string[];
  pageKey?: string;
}
