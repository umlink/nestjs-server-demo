import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { RegisterUserDto } from './dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { UserBaseInfoVO } from '@/modules/users/entities/user.entity';
import { RolesEnums } from '@/constants/enums';
import { Prisma } from '@prisma/client';
import { User } from '@/decorator/user.decorators';
import { AuthUser } from '@/decorator/interface';
import { NotLogin } from '@/decorator/auth.decorators';
import { Api } from '@/decorator/api.decorator';
import { errorHandler } from '@/utils/prisma-utils';
import { VipService } from '@/modules/vip/vip.service';
import { JwtService } from '@nestjs/jwt';

@ApiTags('User')
@Controller('user')
export class UsersController {
  @Inject(UsersService)
  private readonly userService: UsersService;
  @Inject(VipService)
  private readonly vipServer: VipService;
  @Inject(JwtService)
  private jwtService: JwtService;

  @Post('/register')
  @NotLogin()
  @Api({
    summary: '用户注册',
    reqType: RegisterUserDto,
    resType: String,
  })
  postRegister(@Body() user: RegisterUserDto) {
    const options = {
      ...user,
      roles: [RolesEnums.User] as Prisma.JsonArray, // 注册用户默认为普通用户
    };
    return this.userService.register(options);
  }

  @Get('/info')
  @Api({ summary: '获取用户详情', resType: UserBaseInfoVO })
  async getUserInfo(@User() user: AuthUser) {
    const ret = await this.userService.getUserById(user.id).catch(errorHandler);
    const vip = await this.vipServer.findValidityVip(user.id);
    const isVip = +Boolean(vip);
    return {
      ...ret,
      isVip,
      accessToken: this.jwtService.sign({
        id: user.id,
        username: user.username,
        email: user.email,
        avatar: user.avatar,
        roles: user.roles,
        isVip,
      }),
    };
  }
}
