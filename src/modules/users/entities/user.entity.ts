import { RolesEnums } from '@/constants/enums';

export class UserBaseInfoVO {
  id: number;
  username: string;
  avatar: string;
  isVip: number;
  roles: RolesEnums[];
  accessToken: string;
}
