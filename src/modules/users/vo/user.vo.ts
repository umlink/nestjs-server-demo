import { RolesEnums } from '@/constants/enums';
import { ApiProperty } from '@nestjs/swagger';

export class UserBaseInfoVO {
  @ApiProperty()
  id: number;
  @ApiProperty()
  username: string;
  @ApiProperty()
  avatar: string;
  @ApiProperty()
  isVip: number;
  @ApiProperty()
  roles: RolesEnums[];
  @ApiProperty()
  accessToken: string;
}
