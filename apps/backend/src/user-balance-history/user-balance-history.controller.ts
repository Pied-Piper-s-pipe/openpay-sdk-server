import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { PageUserBalanceHistoryRequestDto } from './dto/page-user-balance-history.request';
import { UserBalanceHistoryService } from './user-balance-history.service';

@Controller('user-balance-histories')
export class UserBalanceHistoryController {
  constructor(
    private readonly userBalanceHistoryService: UserBalanceHistoryService,
  ) {}

  @Get()
  async findAll(@Query() req: PageUserBalanceHistoryRequestDto) {
    if (!req.user_id) {
      throw new BadRequestException('user_id is required');
    }
    return await this.userBalanceHistoryService.page(req);
  }
}
