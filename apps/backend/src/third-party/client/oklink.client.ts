import { ApiResponse } from '@app/shared/define/oklink.api';
import { Client } from './client';
import { plainToInstance } from 'class-transformer';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  PageTokenTxListResponse,
  TokenTransaction,
} from '../dto/page-token-tx-list.response';
import { PageTokenTxListRequestDto } from '../dto/page-token-tx-list.request';
import { AddresssTokenTxList } from '../dto/oklink/transactions.response';
import { BaseClient } from './base.client';
import { TransactionsRequest } from '../dto/oklink/transactions.request';
import { PageNftsForOwnerRequest } from '@backend/nft/dto/page.nfts.request';
import {
  Nft,
  PageNftsForOwnerResponse,
} from '@backend/nft/dto/page.nfts.response';
import { getChainTypeByCode } from '@app/shared/define/chain.enum';
import { OklinkNftsResponse } from '../dto/oklink/oklink.nfts.response';
import {
  transformStatus,
  transformTransactionType,
} from '@app/shared/utils/util';

const isValidApiResponse = <T>(
  resp: ApiResponse<T>,
): resp is ApiResponse<T> & { data: T extends (infer U)[] ? [U, ...U[]] : T } =>
  resp.code === '0' &&
  resp.data !== undefined &&
  resp.data !== null &&
  (Array.isArray(resp.data) ? resp.data.length > 0 : true);

@Injectable()
export class OklinkClient extends BaseClient implements Client {
  logger = new Logger(OklinkClient.name);
  constructor(configService: ConfigService) {
    super(configService);
  }

  async getAddressTxList(
    req: PageTokenTxListRequestDto,
  ): Promise<PageTokenTxListResponse> {
    const uri = `${this.URIS.ADDRESSES}/transaction-list`;
    const query: TransactionsRequest = {
      chainShortName: req.chainShortName,
      tokenContractAddress: req.contract_address,
      address: req.from_address,
      protocolType: req.category,
      page: req.page,
      limit: req.limit,
      startBlock: req.from_block,
      endBlock: req.to_block,
    };

    const resp = await this.httpClient.get<ApiResponse<AddresssTokenTxList[]>>(
      uri,
      query,
      this.headers,
    );
    if (isValidApiResponse<AddresssTokenTxList[]>(resp)) {
      const chainInfo = resp.data[0];
      const transactionList =
        chainInfo.transactionLists?.map((tx) => {
          const transaction: TokenTransaction = {
            category: '',
            block_number: tx.height,
            transaction_hash: tx.txId,
            transaction_index: '',
            from_address: [tx.from],
            to_address: [tx.to],
            amount: tx.amount,
            gas_used: tx.txFee,
            gas_price: '',
            token_name: tx.symbol,
            decimal: 0,
            contract_address: tx.tokenContractAddress,
            erc721_token_id: tx.tokenId,
            status: transformStatus(tx.state),
            block_timestamp: tx.transactionTime,
            transaction_type: transformTransactionType(
              tx.from,
              req.from_address,
            ),
          };
          return transaction;
        }) || [];

      return {
        page_key: '',
        transactions: transactionList,
      };
    }
  }

  async getNftForOwner(
    req: PageNftsForOwnerRequest,
  ): Promise<PageNftsForOwnerResponse> {
    const chain = getChainTypeByCode(req.wallet_type);
    if (!chain) {
      throw new Error('Invalid chain type');
    }
    const chainShortName = chain.name;
    const query = {
      chainShortName: chainShortName,
      tokenContractAddress: req.contract_address,
      address: req.owner,
      protocolType: 'token_721',
      page: req.page,
      limit: req.limit,
    };
    const uri = `${this.URIS.NFT}/address-balance-fills`;
    const resp = await this.httpClient.get<ApiResponse<OklinkNftsResponse>>(
      uri,
      query,
      this.headers,
    );
    if (isValidApiResponse<OklinkNftsResponse>(resp)) {
      const chainInfo = resp.data[0];
      const nfts =
        chainInfo.tokenList?.map((tx) => {
          return {
            wallet_type: req.wallet_type,
            contract: {
              address: tx.tokenContractAddress,
              name: '',
              symbol: '',
              total_supply: 0,
              token_type: '',
            },
            token_id: tx.tokenId,
            token_type: tx.protocolType,
            name: tx.token,
            token_uri: tx.logoUrl,
            description: '',
            image_url: '',
          };
        }) || [];

      return {
        page_key: '',
        nfts: nfts,
      };
    }
    return {} as PageNftsForOwnerResponse;
  }
}
