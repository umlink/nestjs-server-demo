import { RolesEnums } from '@/constants/enums';
import { ResVO } from '@/interface/response-vo';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import dayjs from 'dayjs';

class UserBaseInfo {
  id: bigint;
  username: string;
  email: string;
  avatar: string;
  roles: RolesEnums[];

  @Transform(({ value }) => dayjs(value).format('YYYY-MM-DD HH:mm:ss'))
  createdAt: Date;
}
export class UserEntity extends ResVO {
  @ApiProperty({ type: UserBaseInfo })
  data: UserBaseInfo;

  constructor(data) {
    super();
    this.data = data;
  }
}

export class UserEntity2 {
  id: bigint;
  username: string;
  email: string;
  avatar: string;

  @Transform(({ value }) => dayjs(value).format('YYYY-MM-DD HH:mm:ss'))
  createdAt: Date;

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}
