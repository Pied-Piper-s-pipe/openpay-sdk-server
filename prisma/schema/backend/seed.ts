import { PrismaClient } from '../../.prisma/backend-client';

const prisma = new PrismaClient();

enum ChainTypeEnum {
  All = -1,
  Bitcoin = 0,
  Ethereum = 1,
  Polygon = 2,
  Solana = 3,
  Optimisum = 4,
  Tron = 5,
  Ton = 6,
  Avalanche = 7,
  Bsc = 8,
  XLayer = 9,
  Sui = 10,
}

export async function backendSeed(config: Record<string, any>) {
  await clearTable();
  await addDefaultChains();
  await addDefaultNode();
  await addDefaultToken();
}

async function clearTable() {
  await prisma.$connect();
  await prisma.node.deleteMany();
  await prisma.token.deleteMany();
  await prisma.chain.deleteMany();
}

async function addDefaultChains() {
  await prisma.$connect();

  // Create chain records
  const chains = [
    {
      chain_id: '1',
      wallet_type: ChainTypeEnum.Ethereum,
      chain_name: 'Ethereum',
      chain_icon: 'https://download.imimo.xyz/token/ETH.png',
      status_type: 1,
      sort: ChainTypeEnum.Ethereum,
    },
    {
      chain_id: '0',
      wallet_type: ChainTypeEnum.Bitcoin,
      chain_name: 'Bitcoin',
      chain_icon: 'https://download.imimo.xyz/token/BTC.png',
      status_type: 1,
      sort: ChainTypeEnum.Bitcoin,
    },
    {
      chain_id: '137',
      wallet_type: ChainTypeEnum.Polygon,
      chain_name: 'Polygon',
      chain_icon: 'https://download.imimo.xyz/token/POL.png',
      status_type: 1,
      sort: ChainTypeEnum.Polygon,
    },
    {
      chain_id: '728126428',
      chain_name: 'TRON',
      wallet_type: ChainTypeEnum.Tron,
      chain_icon: 'https://download.imimo.xyz/token/TRX.png',
      status_type: 1,
      sort: ChainTypeEnum.Tron,
    },
    {
      chain_id: '-1',
      chain_name: 'TON',
      wallet_type: ChainTypeEnum.Ton,
      chain_icon: 'https://download.imimo.xyz/token/TON.png',
      status_type: 1,
      sort: ChainTypeEnum.Ton,
    },
    {
      chain_id: '5426',
      wallet_type: ChainTypeEnum.Solana,
      chain_name: 'Solana',
      chain_icon: 'https://download.imimo.xyz/token/SOL.png',
      status_type: 1,
      sort: ChainTypeEnum.Solana,
    },
    {
      chain_id: '43114',
      chain_name: 'Avalanche C',
      wallet_type: ChainTypeEnum.Avalanche,
      chain_icon: 'https://download.imimo.xyz/token/AVAX.png',
      status_type: 1,
      sort: ChainTypeEnum.Avalanche,
    },
    {
      chain_id: '56',
      wallet_type: ChainTypeEnum.Bsc,
      chain_name: 'BNB Smart Chain',
      chain_icon: 'https://download.imimo.xyz/token/BNB.png',
      status_type: 1,
      sort: ChainTypeEnum.Bsc,
    },
    {
      chain_id: '196',
      wallet_type: ChainTypeEnum.XLayer,
      chain_name: 'X layer',
      chain_icon: 'https://download.imimo.xyz/token/OKB.png',
      status_type: 1,
      sort: ChainTypeEnum.XLayer,
    },
    {
      chain_id: '10',
      wallet_type: ChainTypeEnum.Optimisum,
      chain_name: 'OP Mainnet',
      chain_icon: 'https://download.imimo.xyz/token/OP.png',
      status_type: 1,
      sort: ChainTypeEnum.Optimisum,
    },
    {
      chain_id: '101',
      wallet_type: ChainTypeEnum.Sui,
      chain_name: 'SUI',
      chain_icon: 'https://download.imimo.xyz/token/SUI.png',
      status_type: 1,
      sort: ChainTypeEnum.Sui,
    },
  ];

  await prisma.chain.createMany({ data: chains });
  await prisma.$disconnect();
}

async function addDefaultNode() {
  await prisma.$connect();

  // Create chain records
  const nodes = [
    {
      chain_id: '1',
      node_url: 'https://eth.llamarpc.com',
    },
    {
      chain_id: '1',
      node_url: 'https://rpc.mevblocker.io',
    },
    {
      chain_id: '1',
      node_url: 'https://ethereum-rpc.publicnode.com',
    },
    {
      chain_id: '1',
      node_url: 'https://eth.public-rpc.com',
    },
    {
      chain_id: '0',
      node_url: 'bitcoin.aranguren.org:50001',
    },
    {
      chain_id: '137',
      node_url: 'https://polygon.llamarpc.com',
    },
    {
      chain_id: '137',
      node_url: 'https://endpoints.omniatech.io/v1/matic/mainnet/public',
    },
    {
      chain_id: '728126428',
      node_url: 'https://rpc.ankr.com/tron_jsonrpc',
    },
    {
      chain_id: '728126428',
      node_url: 'https://api.trongrid.io/jsonrpc',
    },
    {
      chain_id: '-1',
      node_url: 'https://main.ton.dev/',
    },
    {
      chain_id: '-1',
      node_url: 'https://tonnode.org/rpc',
    },
    {
      chain_id: '-1',
      node_url: 'https://toncenter.com/api/v2/jsonRPC',
    },
    {
      chain_id: '10',
      node_url: 'https://mainnet.optimism.io',
    },
    {
      chain_id: '10',
      node_url: 'https://optimism.gateway.tenderly.com',
    },
    {
      chain_id: '10',
      node_url: 'https://mainnet.optimism.io',
    },
    {
      chain_id: '196',
      node_url: 'https://rpc.xlayer.tech',
    },
    {
      chain_id: '196',
      node_url: 'https://xlayerrpc.okx.com',
    },
    {
      chain_id: '101',
      node_url: 'https://sui-mainnet-endpoint.blockvision.org',
    },
    {
      chain_id: '56',
      node_url: 'https://binance.llamarpc.com',
    },
    {
      chain_id: '43114',
      node_url: 'https://avalanche.drpc.org',
    },
    {
      chain_id: '43114',
      node_url: 'https://1rpc.io/avax/c',
    },
    {
      chain_id: '5426',
      node_url: 'http://explorer.solana.com/',
    },
    {
      chain_id: '5426',
      node_url: 'http://solscan.io/',
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
    },
    {
      chain_id: '5426',
      token_symbol: 'SOL',
      token_name: 'SOL',
      is_native: true,
      coin_market_cap_id: 5426,
      token_decimals: 18,
      default_subscribe: 1,
      is_multiple_chain: false,
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
    },
    {
      chain_id: '101',
      token_symbol: 'SUI',
      token_name: 'SUI',
      is_native: true,
      coin_market_cap_id: 20947,
      token_decimals: 18,
      default_subscribe: 0,
      is_multiple_chain: false,
    },
  ];

  await prisma.token.createMany({ data: tokens });
  await prisma.$disconnect();
}
