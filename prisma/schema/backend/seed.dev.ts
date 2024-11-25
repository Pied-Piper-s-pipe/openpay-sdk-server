import { PrismaClient } from '../../.prisma/backend-client';
import { addDefaultChains, clearTable } from './seed';

const prisma = new PrismaClient();

export async function backendSeedDev(config: Record<string, any>) {
  await clearTable();
  await addDefaultChains();
  await addDefaultNode();
  await addDefaultToken();
}

async function addDefaultNode() {
  await prisma.$connect();
  const nodes = [
    {
      chain_id: '1',
      node_url:
        'https://eth-sepolia.g.alchemy.com/v2/r6YYHS4Dubw3w91YTlewG7PPsYf63ahu',
    },
    {
      chain_id: '0',
      node_url: 'bitcoin.aranguren.org:50001',
    },
    {
      chain_id: '137',
      node_url:
        'https://polygon-amoy.g.alchemy.com/v2/r6YYHS4Dubw3w91YTlewG7PPsYf63ahu',
    },
    {
      chain_id: '728126428',
      node_url: 'https://47.252.19.181:50051',
    },
    {
      chain_id: '-1',
      node_url: 'https://testnet.toncenter.com/api/v2/jsonRPC',
    },
    {
      chain_id: '10',
      node_url:
        'https://opt-sepolia.g.alchemy.com/v2/r6YYHS4Dubw3w91YTlewG7PPsYf63ahu',
    },
    {
      chain_id: '196',
      node_url: 'https://xlayertestrpc.okx.com',
    },

    {
      chain_id: '101',
      node_url: 'https://fullnode.testnet.sui.io:443',
    },
    {
      chain_id: '56',
      node_url:
        'https://bnb-testnet.g.alchemy.com/v2/r6YYHS4Dubw3w91YTlewG7PPsYf63ahu',
    },
    {
      chain_id: '43114',
      node_url: 'https://api.avax-test.network/ext/bc/C/rpc',
    },
    {
      chain_id: '5426',
      node_url:
        'https://solana-devnet.g.alchemy.com/v2/r6YYHS4Dubw3w91YTlewG7PPsYf63ahu',
    },
  ];

  await prisma.node.createMany({ data: nodes });
  await prisma.$disconnect();
}

async function addDefaultToken() {
  await prisma.$connect();
  // Create chain records
  const tokens = [
    {
      chain_id: '0',
      token_symbol: 'BTC',
      token_name: 'BTC',
      is_native: true,
      coin_market_cap_id: 1,
      token_decimals: 18,
      default_subscribe: 1,
      is_multiple_chain: false,
      token_icon: 'https://download.imimo.xyz/token/BTC.png',
    },
    {
      chain_id: '1',
      token_symbol: 'ETH',
      token_name: 'ETH',
      is_native: true,
      coin_market_cap_id: 1027,
      token_decimals: 18,
      default_subscribe: 1,
      is_multiple_chain: false,
      token_icon: 'https://download.imimo.xyz/token/ETH.png',
    },
    {
      chain_id: '1',
      token_symbol: 'USDT',
      token_name: 'Tether USD',
      is_native: false,
      coin_market_cap_id: 825,
      token_decimals: 6,
      default_subscribe: 1,
      is_multiple_chain: true,
      contract_address: '0xbDeaD2A70Fe794D2f97b37EFDE497e68974a296d',
      token_icon: 'https://download.imimo.xyz/token/USDT.png',
    },
    {
      chain_id: '137',
      token_symbol: 'POL',
      token_name: 'POL',
      is_native: true,
      coin_market_cap_id: 28321,
      token_decimals: 18,
      default_subscribe: 1,
      is_multiple_chain: false,
      token_icon: 'https://download.imimo.xyz/token/POL.png',
    },
    {
      chain_id: '137',
      token_symbol: 'USDT',
      token_name: 'Tether USD',
      is_native: false,
      coin_market_cap_id: 825,
      token_decimals: 6,
      default_subscribe: 1,
      is_multiple_chain: true,
      contract_address: '0xb0562be9ad27ab932cba940f72250671effccb40',
      token_icon: 'https://download.imimo.xyz/token/USDT.png',
    },
    {
      chain_id: '728126428',
      token_symbol: 'TRX',
      token_name: 'TRX',
      is_native: true,
      coin_market_cap_id: 1958,
      token_decimals: 18,
      default_subscribe: 1,
      is_multiple_chain: false,
      token_icon: 'https://download.imimo.xyz/token/TRX.png',
    },
    {
      chain_id: '728126428',
      token_symbol: 'USDT',
      token_name: 'Tether USD',
      is_native: false,
      coin_market_cap_id: 825,
      token_decimals: 6,
      default_subscribe: 1,
      is_multiple_chain: true,
      contract_address: 'TU1ntBzpGPp7GJkzxLTKwYsneJ9JKUmBCK',
      token_icon: 'https://download.imimo.xyz/token/USDT.png',
    },
    {
      chain_id: '-1',
      token_symbol: 'TON',
      token_name: 'TON',
      is_native: true,
      coin_market_cap_id: 11419,
      token_decimals: 18,
      default_subscribe: 1,
      is_multiple_chain: false,
      token_icon: 'https://download.imimo.xyz/token/TON.png',
    },
    {
      chain_id: '-1',
      token_symbol: 'USDT',
      token_name: 'Tether USD',
      is_native: false,
      coin_market_cap_id: 825,
      token_decimals: 6,
      default_subscribe: 1,
      is_multiple_chain: true,
      contract_address: 'EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs',
      token_icon: 'https://download.imimo.xyz/token/USDT.png',
    },
    {
      chain_id: '5426',
      token_symbol: 'SOL',
      token_name: 'SOL',
      is_native: true,
      coin_market_cap_id: 5426,
      token_decimals: 9,
      default_subscribe: 1,
      is_multiple_chain: false,
      token_icon: 'https://download.imimo.xyz/token/SOL.png',
    },
    {
      chain_id: '5426',
      token_symbol: 'USDT',
      token_name: 'Tether USD',
      is_native: false,
      coin_market_cap_id: 825,
      token_decimals: 6,
      default_subscribe: 1,
      is_multiple_chain: true,
      contract_address: 'EJwZgeZrdC8TXTQbQBoL6bfuAnFUUy1PVCMB4DYPzVaS',
      token_icon: 'https://download.imimo.xyz/token/USDT.png',
    },
    {
      chain_id: '43114',
      token_symbol: 'AVAX',
      token_name: 'AVAX',
      is_native: true,
      coin_market_cap_id: 5805,
      token_decimals: 18,
      default_subscribe: 0,
      is_multiple_chain: false,
      token_icon: 'https://download.imimo.xyz/token/AVAX.png',
    },
    {
      chain_id: '56',
      token_symbol: 'BNB',
      token_name: 'BNB',
      is_native: true,
      coin_market_cap_id: 1839,
      token_decimals: 18,
      default_subscribe: 0,
      is_multiple_chain: false,
      token_icon: 'https://download.imimo.xyz/token/BNB.png',
    },
    {
      chain_id: '196',
      token_symbol: 'OKB',
      token_name: 'OKB',
      is_native: true,
      coin_market_cap_id: 3897,
      token_decimals: 18,
      default_subscribe: 0,
      is_multiple_chain: false,
      token_icon: 'https://download.imimo.xyz/token/OKB.png',
    },
    {
      chain_id: '10',
      token_symbol: 'OP',
      token_name: 'OP',
      is_native: true,
      coin_market_cap_id: 11840,
      token_decimals: 18,
      default_subscribe: 0,
      is_multiple_chain: false,
      token_icon: 'https://download.imimo.xyz/token/OP.png',
    },
    {
      chain_id: '101',
      token_symbol: 'SUI',
      token_name: 'SUI',
      is_native: true,
      coin_market_cap_id: 20947,
      token_decimals: 9,
      default_subscribe: 0,
      is_multiple_chain: false,
      token_icon: 'https://download.imimo.xyz/token/SUI.png',
    },
  ];

  await prisma.token.createMany({ data: tokens });
  await prisma.$disconnect();
}
