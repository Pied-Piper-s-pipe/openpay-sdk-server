import { ChainTypeEnum } from './chain.enum';

export const AlchemyNetwork = {
  ETH: { code: ChainTypeEnum.Ethereum.code, network: 'eth-mainnet' },
  Polygon: { code: ChainTypeEnum.Polygon.code, network: 'polygon-mainnet' },
  Solana: { code: ChainTypeEnum.Solana.code, network: 'solana-mainnet' },
  Optimisum: { code: ChainTypeEnum.Optimisum.code, network: 'opt-mainnet' },
};

export function getNetworkByCode(code: number) {
  return (
    Object.values(AlchemyNetwork).find((network) => network.code === code) ||
    null
  );
}
