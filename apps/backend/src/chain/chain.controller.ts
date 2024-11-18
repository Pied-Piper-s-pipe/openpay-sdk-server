import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
  Query,
} from '@nestjs/common';
import { ChainService } from './chain.service';
import { CreateChainDto } from './dto/create-chain.dto';
import { UpdateChainDto } from './dto/update-chain.dto';
import { NodeService } from '@backend/node/node.service';

@Controller('chains')
export class ChainController {
  constructor(
    @Inject() private readonly chainService: ChainService,
    @Inject() private readonly nodeService: NodeService,
  ) {}

  @Get('nodes')
  async findNodes(@Query('wallet_type') wallet_type: number) {
    return await this.nodeService.findByChain(wallet_type);
  }

  @Post()
  create(@Body() createChainDto: CreateChainDto) {
    return this.chainService.create(createChainDto);
  }

  @Get()
  findAll() {
    return this.chainService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chainService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChainDto: UpdateChainDto) {
    return this.chainService.update(+id, updateChainDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chainService.remove(+id);
  }
}
