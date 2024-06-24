import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { RolesEnums } from '@/constants/enums';
import { Md5 } from 'ts-md5';
import { ConfigService } from '@/modules/config/config.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async loginByEmailCode(email: string, code: number) {
    let user = await this.usersService.getUserByEmail({
      email,
    });
    let pwd: number;
    if (!user) {
      user = await this.usersService.registerByEmail({
        username: email,
        email,
        password: Md5.hashStr(code + this.configService.get('MD5_SALT')),
        roles: [RolesEnums.User],
      });
      pwd = code;
    }
    return {
      access_token: this.jwtService.sign(user),
      code: pwd,
    };
  }

  async loginByEmailPwd(where: Prisma.UserWhereInput) {
    const user = await this.usersService.getUserByEmail(where);
    if (!user) {
      throw new BadRequestException('密码错误或邮箱不存在');
    }
    return {
      access_token: this.jwtService.sign(user),
    };
  }
}
