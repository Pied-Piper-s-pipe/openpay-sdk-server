import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { TokenService } from './token.service';
import { CreateTokenDto } from './dto/create-token.dto';
import { UpdateTokenDto } from './dto/update-token.dto';
import { PageTokenRequestDto } from './dto/page-token.request.dto';
import {
  SubscribeTokenReqeustDto,
  UnsubscribeTokenReqeustDto,
} from './dto/subscribe-token.request.dto';

@Controller('tokens')
export class TokenController {
  constructor(private readonly tokenService: TokenService) {}

  @Get('subscribeds')
  async subscribeds(@Query('address') address: string) {
    return this.tokenService.subscribeds(address);
  }

  @Post()
  create(@Body() createTokenDto: CreateTokenDto) {
    return this.tokenService.create(createTokenDto);
  }

  @Get()
  async findAll(@Query() pageTokenReqeust: PageTokenRequestDto) {
    return this.tokenService.findAll(pageTokenReqeust);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.tokenService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTokenDto: UpdateTokenDto) {
    return this.tokenService.update(+id, updateTokenDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tokenService.remove(+id);
  }

  @Post('subscribe')
  @HttpCode(HttpStatus.OK)
  async subscribeToken(@Body() body: SubscribeTokenReqeustDto) {
    return await this.tokenService.subscribeToken(body);
  }

  @Post('unsubscribe')
  @HttpCode(HttpStatus.OK)
  async unsubscribeToken(@Body() body: UnsubscribeTokenReqeustDto) {
    return await this.tokenService.unsubscribeToken(body);
  }
}
