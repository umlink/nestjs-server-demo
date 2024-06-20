import { RolesEnums } from '@/constants/enums';

export interface AuthUser {
  id: number;
  username: string;
  roles: RolesEnums[];
}
