import * as fs from 'fs';
import * as yaml from 'js-yaml';

import { backendSeedProd } from './schema/backend/seed';
import { backendSeedDev } from './schema/backend/seed.dev';
import Redis from 'ioredis';

function loadConfig() {
  const environment = process.env.NODE_ENV || 'development';
  const yamlConfig = yaml.load(
    fs.readFileSync(`./config.${environment}.yaml`, 'utf8'),
  ) as Record<string, any>;
  return yamlConfig;
}

async function main() {
  const config = loadConfig();
  process.env.BACKEND_DATABASE_URL = config.database.backend.url;
  await clearRedis(config);
  const environment = process.env.NODE_ENV || 'development';
  if (environment === 'development') {
    await backendSeedDev(config);
  } else {
    await backendSeedProd(config);
  }
}

async function clearRedis(config: Record<string, any>) {
  const redisClient = new Redis(config.redis.url); // 创建 Redis 客户端
  try {
    await redisClient.flushdb(); // 清空所有 Redis 数据
    console.log('Redis 数据已成功清理');
  } catch (error) {
    console.error('清理 Redis 数据时出错:', error);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {});
