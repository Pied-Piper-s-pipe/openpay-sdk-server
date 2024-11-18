import { Injectable } from '@nestjs/common';
import { PageNftsForOwnerRequest } from './dto/page.nfts.request';
import { PageNftsForOwnerResponse } from './dto/page.nfts.response';
import { getClientByChainType } from '@backend/third-party/client';

@Injectable()
export class NftService {
  async findByOwner(
    req: PageNftsForOwnerRequest,
  ): Promise<PageNftsForOwnerResponse> {
    const client = getClientByChainType(req.wallet_type);
    return client.getNftForOwner(req);
  }
}
