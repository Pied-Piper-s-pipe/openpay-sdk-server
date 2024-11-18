import { Controller, Get, Query } from '@nestjs/common';
import { PageNftsForOwnerRequest } from './dto/page.nfts.request';
import { PageNftsForOwnerResponse } from './dto/page.nfts.response';
import { NftService } from './nft.service';

@Controller('nfts')
export class NftController {
  constructor(private readonly nftService: NftService) {}

  @Get()
  async findByOwner(
    @Query() req: PageNftsForOwnerRequest,
  ): Promise<PageNftsForOwnerResponse> {
    return await this.nftService.findByOwner(req);
  }
}
