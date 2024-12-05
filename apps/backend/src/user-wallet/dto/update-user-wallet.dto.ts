import { PartialType } from '@nestjs/mapped-types';
import { CreateUserWalletRequestDto } from './create-user-wallet.request.dto';

export class UpdateUserWalletDto extends PartialType(
  CreateUserWalletRequestDto,
) {}
