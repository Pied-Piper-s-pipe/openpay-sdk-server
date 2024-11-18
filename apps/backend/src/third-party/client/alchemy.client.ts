import { Client } from './client';

import { HttpClient } from '@app/shared/axios';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ALCHEMY_ACCESSKEY, ALCHEMY_API } from '@app/shared/define/env.name';
import {
  PageTokenTxListResponse,
  TokenTransaction,
} from '../dto/page-token-tx-list.response';
import { PageTokenTxListRequestDto } from '../dto/page-token-tx-list.request';
import { getNetworkByCode } from '@app/shared/define/alchemy.enum';
import { AssertTransfersRequest } from '../dto/alchemy/assert.transfers.request';
import {
  decimalStringToHex,
  transformTransactionType,
} from '@app/shared/utils/util';
import { AlchemyRpcResponse } from '../dto/alchemy/rpc.common';
import { AssertTransfersResponse } from '../dto/alchemy/assert.transfers.response';
import { BaseClient } from './base.client';
import { PageNftsForOwnerRequest } from '@backend/nft/dto/page.nfts.request';
import { PageNftsForOwnerResponse } from '@backend/nft/dto/page.nfts.response';
import { AlchemyNftsResponse } from '../dto/alchemy/alchemy.nfts.response';
import { isNotEmpty } from 'class-validator';

@Injectable()
export class AlchemyClient extends BaseClient implements Client {
  logger = new Logger(AlchemyClient.name);
  alchemyHttpClient: HttpClient;

  constructor(configService: ConfigService) {
    super(configService);
    this.initialize();
  }

  initialize() {
    const apiUrl = this.configService.get<string>(ALCHEMY_API);
    this.alchemyHttpClient = new HttpClient(apiUrl || '');
  }

  async getAddressTxList(
    req: PageTokenTxListRequestDto,
  ): Promise<PageTokenTxListResponse> {
    const network = getNetworkByCode(req.wallet_type).network;
    const accessKey = this.configService.get<string>(ALCHEMY_ACCESSKEY);
    const uri = this.configService
      .get<string>(ALCHEMY_API)
      .replace('${network}', network)
      .concat(`/v2/${accessKey}`);

    const query: AssertTransfersRequest = {
      fromBlock: req.from_block || '0x0',
      toBlock: req.to_block || 'latest',
      fromAddress: req.from_address,
      toAddress: req.to_address,
      category: ['external', 'erc20', 'erc721', 'erc1155', 'specialnft'],
      order: 'asc',
      withMetadata: true,
      excludeZeroValue: true,
      maxCount: req.limit ? decimalStringToHex(req.limit) : '0x10',
      contractAddresses: req.contract_address
        ? [req.contract_address]
        : undefined,
      pageKey: isNotEmpty(req.page_key) ? req.page_key : undefined,
    };

    const resp = await this.alchemyHttpClient.post<
      AlchemyRpcResponse<AssertTransfersResponse>,
      any
    >(
      uri,
      {
        id: 1,
        jsonrpc: '2.0',
        method: 'alchemy_getAssetTransfers',
        params: [query],
      },
      this.headers,
    );

    const transactions =
      resp.result.transfers.map((tx) => {
        const transaction: TokenTransaction = {
          category: tx.category,
          block_number: tx.blockNum,
          transaction_hash: tx.hash,
          transaction_index: '',
          from_address: [tx.from],
          to_address: [tx.to],
          amount: tx.value.toString(),
          gas_used: undefined,
          gas_price: '',
          token_name: tx.asset,
          decimal: 0,
          contract_address: '',
          erc721_token_id: tx.tokenId,
          status: 1,
          block_timestamp: tx.metadata.blockTimestamp
            ? Date.parse(tx.metadata.blockTimestamp).toString()
            : '',
          transaction_type: transformTransactionType(tx.from, req.from_address),
        };
        return transaction;
      }) || [];

    return {
      page_key: resp.result.pageKey,
      transactions: transactions,
    };
  }

  async getNftForOwner(
    req: PageNftsForOwnerRequest,
  ): Promise<PageNftsForOwnerResponse> {
    const network = getNetworkByCode(req.wallet_type).network;
    const accessKey = this.configService.get<string>(ALCHEMY_ACCESSKEY);
    const uri = this.configService
      .get<string>(ALCHEMY_API)
      .replace('${network}', network)
      .concat(`/nft/v3/${accessKey}/getNFTsForOwner`);
    const query = {
      owner: req.owner,
      contractAddresses: req.contract_address
        ? [req.contract_address]
        : undefined,
      withMetadata: true,
      pageKey: isNotEmpty(req.page_key) ? req.page_key : undefined,
    };

    const resp = await this.httpClient.get<AlchemyNftsResponse>(
      uri,
      query,
      this.headers,
    );

    const nfts =
      resp.ownedNfts.map((tx) => {
        return {
          wallet_type: req.wallet_type,
          contract: {
            address: tx.contract?.address,
            name: tx.contract?.name,
            symbol: tx.contract?.symbol,
            total_supply: Number(tx.contract?.totalSupply || 0),
            token_type: tx.contract?.tokenType,
          },
          token_id: tx.tokenId,
          token_type: tx.tokenType,
          name: tx.name,
          description: tx.description,
          token_uri: tx.tokenUri,
          image_url: tx.image?.originalUrl,
        };
      }) || [];

    return {
      page_key: resp.pageKey,
      nfts: nfts,
    };
  }
}
