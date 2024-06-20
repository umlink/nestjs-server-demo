import { RolesEnums } from '@/constants/enums';

export class UserBaseInfoVO {
  id: bigint;
  username: string;
  email: string;
  avatar: string;
  roles: RolesEnums[];
}
