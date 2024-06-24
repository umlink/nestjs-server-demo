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

@ApiTags('User')
@Controller('user')
export class UsersController {
  @Inject(UsersService)
  private readonly userService: UsersService;

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
    console.log(user);
    return this.userService.getUserById(user.id).catch(errorHandler);
  }
}
