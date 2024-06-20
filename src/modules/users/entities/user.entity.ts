import { RolesEnums } from '@/constants/enums';
import { ResVO } from '@/interface/response-vo';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import dayjs from 'dayjs';

class UserBaseInfoVo {
  id: bigint;
  username: string;
  email: string;
  avatar: string;
  roles: RolesEnums[];

  @Transform(({ value }) => dayjs(value).format('YYYY-MM-DD HH:mm:ss'))
  createdAt: Date;
}
export class UserBaseInfoRes extends ResVO {
  @ApiProperty({ type: UserBaseInfoVo })
  data: UserBaseInfoVo;

  constructor(data) {
    super();
    this.data = data;
  }
}
