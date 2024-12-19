// const { spawn } = require("child_process");
// const path = require("path");
// const os = require("os");

import { spawn } from 'child_process';
import * as path from 'path';
import * as os from 'os';
import { Logger } from '@nestjs/common';

export class TokenBalanceQuerier {
  private process: any;
  private isProcessAlive: boolean = false;
  private logger = new Logger(TokenBalanceQuerier.name);

  platform: string;
  arch: string;
  binaryName: string;

  constructor() {
    this.process = null;
    this.platform = os.platform();
    this.arch = os.arch();
    this.binaryName = this.getBinaryName();

    // 添加进程退出处理
    process.on('exit', () => {
      this.cleanup();
    });
  }

  private getBinaryName(): string {
    const platform =
      this.platform === 'win32'
        ? 'windows'
        : this.platform === 'darwin'
          ? 'darwin'
          : 'linux';

    const arch = this.arch === 'x64' ? 'amd64' : 'arm64';
    const ext = platform === 'windows' ? '.exe' : '';

    return `tokenbalance-${platform}-${arch}${ext}`;
  }

  private cleanup() {
    try {
      if (this.process) {
        this.process.kill();
        this.process = null;
        this.isProcessAlive = false;
      }
    } catch (error) {
      this.logger.error(`Cleanup error: ${error.message}`);
    }
  }

  async init(apiAddr: string, wsAddr: string): Promise<void> {
    try {
      if (this.process) {
        await this.close();
      }

      const binaryPath = path.join(
        __dirname,
        '../../../',
        this.getBinaryName(),
      );
      this.logger.log(`Initializing with binary: ${binaryPath}`);

      this.process = spawn(binaryPath, ['-api', apiAddr, '-ws', wsAddr]);

      // 处理进程错误
      this.process.on('error', (error) => {
        this.logger.error(`Process error: ${error.message}`);
        this.isProcessAlive = false;
      });

      this.process.on('exit', (code) => {
        this.logger.warn(`Process exited with code ${code}`);
        this.isProcessAlive = false;
      });

      return new Promise<void>((resolve, reject) => {
        const timeout = setTimeout(() => {
          this.isProcessAlive = false;
          reject(new Error('Initialization timeout'));
        }, 5000);

        this.process.stdout.on('data', (data) => {
          if (data.toString().includes('Enter command')) {
            clearTimeout(timeout);
            this.isProcessAlive = true;
            resolve();
          }
        });

        this.process.stderr.on('data', (data) => {
          this.logger.error(`Process stderr: ${data}`);
        });
      });
    } catch (error) {
      this.isProcessAlive = false;
      this.logger.error(`Init error: ${error.message}`);
      throw error;
    }
  }

  async queryBalance(
    walletType: number,
    tokenName: string,
    address: string,
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      try {
        if (!this.process || !this.isProcessAlive) {
          reject(new Error('Process not initialized or not alive'));
          return;
        }

        const command = `query ${walletType} ${tokenName} ${address}\n`;
        this.logger.debug(`Executing command: ${command.trim()}`);

        const timeoutId = setTimeout(() => {
          cleanup();
          reject(new Error('Query timeout'));
        }, 5000);

        const onData = (data: Buffer) => {
          try {
            const output = data.toString();
            if (output.includes('Balance:')) {
              const match = output.match(/Balance:\s*([\d.]+)/);
              if (match) {
                cleanup();
                resolve(match[1]);
              }
            }
          } catch (error) {
            cleanup();
            reject(error);
          }
        };

        const cleanup = () => {
          clearTimeout(timeoutId);
          if (this.process && this.process.stdout) {
            this.process.stdout.removeListener('data', onData);
          }
        };

        this.process.stdout.on('data', onData);
        this.process.stdin.write(command);
      } catch (error) {
        reject(error);
      }
    });
  }

  async close(): Promise<void> {
    return new Promise<void>((resolve) => {
      try {
        if (this.process && this.isProcessAlive) {
          this.process.stdin.write('exit\n');

          setTimeout(() => {
            this.cleanup();
            resolve();
          }, 1000);
        } else {
          resolve();
        }
      } catch (error) {
        this.logger.error(`Close error: ${error.message}`);
        this.cleanup();
        resolve();
      }
    });
  }
}
