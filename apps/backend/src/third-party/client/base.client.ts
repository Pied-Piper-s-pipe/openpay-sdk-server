import { ApiResponse } from '@app/shared/define/oklink.api';
import { Client } from './client';

import { plainToInstance } from 'class-transformer';
import { HttpClient } from '@app/shared/axios';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { OK_LINK_ACCESSKEY, OK_LINK_API } from '@app/shared/define/env.name';
import { PageTokenTxListResponse } from '../dto/page-token-tx-list.response';
import { PageTokenTxListRequestDto } from '../dto/page-token-tx-list.request';
import { TransactionReceiptResponse } from '../dto/transaction-receipt.response';
import { TransactionReceiptRequest } from '../dto/transaction-receipt.request';
import { PageNftsForOwnerRequest } from '@backend/nft/dto/page.nfts.request';
import { PageNftsForOwnerResponse } from '@backend/nft/dto/page.nfts.response';
import { transformStatus } from '@app/shared/utils/util';
import { GetBlockHeightByTimeRequest } from '../dto/get.block.request';
import {
  BlockWithTime,
  GetBlockHeightByTimeResponse,
} from '../dto/get.block.response';

export class BaseResponse {
  page: string = '0';
  limit: string = '0';
  totalPage: string = '0';
  chainFullName: string = '';
  chainShortName: string = '';
  nextPage: string = '';
}

const isValidApiResponse = <T>(
  resp: ApiResponse<T>,
): resp is ApiResponse<T> & { data: T extends (infer U)[] ? [U, ...U[]] : T } =>
  resp.code === '0' &&
  resp.data !== undefined &&
  resp.data !== null &&
  (Array.isArray(resp.data) ? resp.data.length > 0 : true);

export class BaseClient implements Client {
  logger = new Logger(BaseClient.name);
  httpClient: HttpClient;
  headers: Record<string, string>;
  protected configService: ConfigService;

  readonly URIS = {
    TRANSACTIONS: '/api/v5/explorer/transaction',
    ADDRESSES: '/api/v5/explorer/address',
    NFT: '/api/v5/explorer/nft',
    BLOCK: '/api/v5/explorer/block/',
  };

  constructor(configService: ConfigService) {
    this.configService = configService;
    const apiUrl = this.configService.get<string>(OK_LINK_API);
    const accessKey = this.configService.get<string>(OK_LINK_ACCESSKEY);
    this.httpClient = new HttpClient(apiUrl || '');
    this.headers = {
      'Ok-Access-Key': accessKey || '',
    };
  }

  async getBlockHeightByTime(
    req: GetBlockHeightByTimeRequest,
  ): Promise<GetBlockHeightByTimeResponse> {
    const uri = `${this.URIS.BLOCK}/block-height-by-time`;
    const resp = await this.httpClient.get<ApiResponse<BlockWithTime[]>>(
      uri,
      req,
      this.headers,
    );

    if (isValidApiResponse<BlockWithTime[]>(resp)) {
      return { blocks: resp.data };
    }

    throw {} as GetBlockHeightByTimeResponse;
  }
  async getNftForOwner(
    req: PageNftsForOwnerRequest,
  ): Promise<PageNftsForOwnerResponse> {
    throw new Error('Method not implemented.');
  }

  async getAddressTxList(
    req: PageTokenTxListRequestDto,
  ): Promise<PageTokenTxListResponse> {
    throw new Error('Method not implemented.');
  }

  async getTransactionDetail(
    req: TransactionReceiptRequest,
  ): Promise<TransactionReceiptResponse> {
    const uri = `${this.URIS.TRANSACTIONS}/transaction-fills`;
    const resp = await this.httpClient.get<
      ApiResponse<TransactionReceiptResponse[]>
    >(uri, req, this.headers);

    if (isValidApiResponse<TransactionReceiptResponse[]>(resp)) {
      const transactionDetail = plainToInstance(
        TransactionReceiptResponse,
        resp.data[0],
      );
      transactionDetail.status = transformStatus(resp.data[0].state);
      return transactionDetail;
    }

    throw {} as TransactionReceiptResponse;
  }
}
