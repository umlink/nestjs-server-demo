import { RolesEnums } from '@/constants/enums';

export class UserBaseInfoVO {
  id: number;
  username: string;
  email: string;
  avatar: string;
  roles: RolesEnums[];
}
