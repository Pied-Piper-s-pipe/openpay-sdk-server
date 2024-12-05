import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  BadRequestException,
} from '@nestjs/common';
import { UserWalletService } from './user-wallet.service';
import { CreateUserWalletRequestDto } from './dto/create-user-wallet.request.dto';
import { UpdateUserWalletDto } from './dto/update-user-wallet.dto';

@Controller('user-wallets')
export class UserWalletController {
  constructor(private readonly userWalletService: UserWalletService) {}

  @Post()
  create(@Body() createUserWalletDtos: CreateUserWalletRequestDto[]) {
    return this.userWalletService.create(createUserWalletDtos);
  }

  @Get()
  findAll(@Query('user_id') user_id: string) {
    if (!user_id) {
      throw new BadRequestException('user_id is required');
    }
    return this.userWalletService.findByUser(user_id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userWalletService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserWalletDto: UpdateUserWalletDto,
  ) {
    return this.userWalletService.update(+id, updateUserWalletDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userWalletService.remove(+id);
  }
}
