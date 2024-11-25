import * as fs from 'fs';
import * as yaml from 'js-yaml';

import { backendSeedProd } from './schema/backend/seed';
import { backendSeedDev } from './schema/backend/seed.dev';

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
  const environment = process.env.NODE_ENV || 'development';
  if (environment === 'development') {
    await backendSeedDev(config);
  } else {
    await backendSeedProd(config);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {});
