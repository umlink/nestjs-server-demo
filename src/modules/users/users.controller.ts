import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { RegisterUserDto } from './dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { UserBaseInfoRes } from '@/modules/users/entities/user.entity';
import { RolesEnums } from '@/constants/enums';
import { Prisma } from '@prisma/client';
import { User } from '@/decorator/user.decorators';
import { AuthUser } from '@/decorator/interface';
import { RegisterUserRes } from './vo/user.entity';
import { Public } from '@/decorator/auth.decorators';
import { Api } from '@/decorator/api.decorator';

@ApiTags('User')
@Controller('user')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('/register')
  @Public()
  @Api({
    summary: '用户注册',
    reqType: RegisterUserDto,
    resType: RegisterUserRes,
  })
  async register(@Body() user: RegisterUserDto) {
    const options = {
      ...user,
      roles: [RolesEnums.User] as Prisma.JsonArray, // 注册用户默认为普通用户
    };
    const id = await this.userService.register(options);
    return { id: String(id) };
  }

  @Get('/info')
  @Api({ summary: '获取用户详情', resType: UserBaseInfoRes })
  async getUserDetail(@User() user: AuthUser) {
    return this.userService.getUserById(user.id);
  }
}
