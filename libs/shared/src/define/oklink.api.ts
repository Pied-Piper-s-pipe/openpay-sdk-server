import { Exclude, Expose, Type } from 'class-transformer';

@Exclude()
export class ApiResponse<T> {
  @Expose({ name: 'code' })
  code?: string;

  @Expose({ name: 'msg' })
  msg?: string;

  @Expose({ name: 'data' })
  @Type(() => Object)
  data?: T;
}

@Exclude()
export class BaseResponse {
  @Expose({ name: 'page' })
  page?: string;

  @Expose({ name: 'limit' })
  limit?: string;

  @Expose({ name: 'totalPage' })
  totalPage?: string;

  @Expose({ name: 'chainFullName' })
  chainFullName?: string;

  @Expose({ name: 'chainShortName' })
  chainShortName?: string;
}
