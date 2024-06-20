import { Prisma } from '@prisma/client';
import { Transform } from 'class-transformer';
import dayjs from 'dayjs';

export class UserEntity {
  id: bigint;
  username: string;
  email: string;
  avatar: string;
  roles: Prisma.JsonValue;

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
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
