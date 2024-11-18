/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';

const yaml = require('js-yaml');
const fs = require('fs');
const dotenv = require('dotenv-flow');

process.chdir(__dirname + '/..');

const args = process.argv.slice(2);
const nodeEnv = args.shift();
const schemaType = args.shift(); // 用于指定 schema 类型
const envs = { dev: 'development', prod: 'production', test: 'test' };

if (
  !Object.keys(envs).includes(nodeEnv) ||
  !['backend', 'admin', 'web3'].includes(schemaType)
) {
  process.stderr.write(
    'Usage: prisma [dev|prod] [backend|admin] [prisma-commands]\n',
  );
  process.exit(0);
}

process.env['NODE_ENV'] = envs[nodeEnv];

// 读取YAML配置文件
const yamlConfig = yaml.load(
  fs.readFileSync(`./config.${process.env['NODE_ENV']}.yaml`, 'utf8'),
);

// 设置环境变量
process.env.BACKEND_DATABASE_URL = yamlConfig.database.backend.url;

// 加载对应环境的 .env 文件
dotenv.config({
  node_env: envs[nodeEnv],
  default_node_env: 'development',
});
const { spawn } = require('child_process');

//import { spawn } from 'child_process';
const opts = { stdio: 'inherit' };

const schemaPath = `./prisma/schema/${schemaType}/schema.prisma`;

// console.log('process.env:', process.env);

// 设置 DATABASE_URL 环境变量
if (schemaType === 'admin') {
  // process.env.DATABASE_URL = process.env.ADMIN_DATABASE_URL;
  process.env.DATABASE_URL = yamlConfig.database.admin.url;
} else {
  // process.env.DATABASE_URL = process.env.BACKEND_DATABASE_URL;
  process.env.DATABASE_URL = yamlConfig.database.backend.url;
}

// 处理 seed 命令
// if (args[0] === 'db' && args[1] === 'seed') {
//   process.env['SEED_TYPE'] = schemaType;
//   const envFile = `.env.${envs[nodeEnv]}`;
//   require('dotenv').config({ path: envFile });
// }

// 设置 PRISMA_SCHEMA_PATH 环境变量
process.env.PRISMA_SCHEMA_PATH = schemaPath;

// 构建 Prisma 命令
const prismaCommand =
  process.platform === 'win32'
    ? 'node_modules\\.bin\\prisma.cmd'
    : 'node_modules/.bin/prisma';
const prismaArgs = [...args, '--schema', process.env.PRISMA_SCHEMA_PATH];

// 执行 Prisma 命令
if (process.platform === 'win32') {
  spawn('cmd', ['/c', prismaCommand, ...prismaArgs], opts);
} else {
  spawn(prismaCommand, prismaArgs, opts);
}

// 输出执行的命令（用于调试）
console.log(`Executing: ${prismaCommand} ${prismaArgs.join(' ')}`);
console.log(`Environment: ${envs[nodeEnv]}`);
console.log(`Schema Type: ${schemaType}`);
console.log(`DATABASE_URL: ${process.env.DATABASE_URL}`);
console.log(`PRISMA_SCHEMA_PATH: ${process.env.PRISMA_SCHEMA_PATH}`);
