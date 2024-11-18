export class OpenSeaMetadata {
  floorPrice: number;
  collectionName: string;
  collectionSlug: string;
  safelistRequestStatus: string;
  imageUrl: string;
  description: string;
  externalUrl: string | null;
  twitterUsername: string | null;
  discordUrl: string | null;
  bannerImageUrl: string | null;
  lastIngestedAt: string;
}

export class Contract {
  address: string;
  name: string;
  symbol: string;
  totalSupply: string | null;
  tokenType: string;
  contractDeployer: string;
  deployedBlockNumber: number;
  openSeaMetadata: OpenSeaMetadata;
  isSpam: boolean | null;
  spamClassifications: string[];
}

export class Image {
  cachedUrl: string | null;
  thumbnailUrl: string | null;
  pngUrl: string | null;
  contentType: string | null;
  size: number | null;
  originalUrl: string | null;
}

export class RawMetadata {
  tokenUri: string;
  metadata: any; // You can define a more specific type based on the metadata structure
  error: string | null;
}

export class Collection {
  name: string;
  slug: string;
  externalUrl: string | null;
  bannerImageUrl: string | null;
}

export class Mint {
  mintAddress: string | null;
  blockNumber: number | null;
  timestamp: string | null;
  transactionHash: string | null;
}

export class AlchemyNft {
  contract: Contract;
  tokenId: string;
  tokenType: string;
  name: string | null;
  description: string | null;
  tokenUri: string;
  image: Image;
  raw: RawMetadata;
  collection: Collection;
  mint: Mint;
  owners: any | null; // You can define a more specific type based on the owners structure
  timeLastUpdated: string;
  balance: string;
  acquiredAt: {
    blockTimestamp: string | null;
    blockNumber: number | null;
  };
}

export class AlchemyNftsResponse {
  ownedNfts: AlchemyNft[];
  totalCount: number;
  validAt: {
    blockNumber: number;
    blockHash: string;
    blockTimestamp: string;
  };
  pageKey: string;
}
