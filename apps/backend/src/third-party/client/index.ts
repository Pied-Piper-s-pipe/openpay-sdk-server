import { ChainTypeEnum } from '@app/shared/define/chain.enum';
import { Client } from './client';
import { AlchemyClient } from './alchemy.client';
import { ConfigService } from '@nestjs/config';
import { OklinkClient } from './oklink.client';

const clients: { [wallet_type: number]: Client } = {};

export function initializeClients(configService: ConfigService): void {
  clients[ChainTypeEnum.Bitcoin.code] = new OklinkClient(configService);
  clients[ChainTypeEnum.Tron.code] = new AlchemyClient(configService);
  clients[ChainTypeEnum.Ton.code] = new AlchemyClient(configService);
  clients[ChainTypeEnum.Avalanche.code] = new AlchemyClient(configService);
  clients[ChainTypeEnum.Bsc.code] = new AlchemyClient(configService);
  clients[ChainTypeEnum.XLayer.code] = new AlchemyClient(configService);
  clients[ChainTypeEnum.Sui.code] = new AlchemyClient(configService);

  clients[ChainTypeEnum.Ethereum.code] = new AlchemyClient(configService);
  clients[ChainTypeEnum.Polygon.code] = new AlchemyClient(configService);
  clients[ChainTypeEnum.Optimisum.code] = new AlchemyClient(configService);
  clients[ChainTypeEnum.Solana.code] = new AlchemyClient(configService);
}

export function getClientByChainType(wallet_type: number): Client {
  const client = clients[wallet_type];
  if (!client) {
    throw new Error(`unsupported chain: ${wallet_type}`);
  }
  return client;
}

export function getClientByChainName(chain_name: string): Client {
  const chain =
    Object.values(ChainTypeEnum).find((chain) => chain.name === chain_name) ||
    null;
  if (!chain) {
    throw new Error(`unsupported chain: ${chain_name}`);
  }
  const client = clients[chain.code];
  if (!client) {
    throw new Error(`unsupported chain: ${chain_name}`);
  }
  return client;
}
