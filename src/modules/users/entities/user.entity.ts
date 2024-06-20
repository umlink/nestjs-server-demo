import { RolesEnums } from '@/constants/enums';
import { ResVO } from '@/interface/response-vo';
import { Transform } from 'class-transformer';
import dayjs from 'dayjs';
export class UserEntity extends ResVO {
  data: {
    id: bigint;
    username: string;
    email: string;
    avatar: string;
    roles: RolesEnums[];
  };

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
