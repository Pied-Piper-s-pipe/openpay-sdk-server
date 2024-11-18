export enum ChainStatusTypeEnum {
  Normal = 1,
  Deleted = 2,
}

export const ChainTypeEnum = {
  All: { code: -1, name: 'all' },
  Bitcoin: { code: 0, name: 'btc' },
  Ethereum: { code: 1, name: 'eth' },
  Polygon: { code: 2, name: 'polygon' },
  Solana: { code: 3, name: 'solana' },
  Optimisum: { code: 4, name: 'op' },
  Tron: { code: 5, name: 'tron' },
  Ton: { code: 6, name: 'ton' },
  Avalanche: { code: 7, name: 'avaxc' },
  Bsc: { code: 8, name: 'bsc' },
  XLayer: { code: 9, name: 'XLayer' },
  Sui: { code: 10, name: 'sui' },
};

export function getChainTypeByCode(code: number) {
  return (
    Object.values(ChainTypeEnum).find((chain) => chain.code === code) || null
  );
}

export enum ChainType {
  ETH = 'eth', // 1
  BASE = 'base', //8453
  BITCOIN = 'btc', //0
  TRON = 'tron', //195
  BNB = 'bsc', //56
  POLYGON = 'polygon', //137
  AVAX = 'avaxc', //43114
  OKTCHAIN = 'oktc', //66
  OP = 'op', //10
  FTM = 'ftm', //250
}
