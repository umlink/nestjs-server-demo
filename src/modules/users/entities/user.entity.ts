import { Exclude, Transform } from 'class-transformer';
import dayjs from 'dayjs';

export class UserEntity {
  id: number;
  name: string;
  email: string;

  @Exclude()
  password: string;

  @Transform(({ value }) => dayjs(value).format('YYYY-MM-DD HH:mm:ss'))
  createdAt: Date;

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}
