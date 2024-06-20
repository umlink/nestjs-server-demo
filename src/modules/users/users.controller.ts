import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Param, ParseIntPipe, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, RegisterUserDto } from './dto/create-user.dto';
import { getIOSTime } from '@/utils/time-utils';
import { RequiredRoles } from '@/decorator/roles.decorator';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserEntity } from '@/modules/users/entities/user.entity';
import { RolesEnums } from '@/constants/enums';
import { Prisma } from '@prisma/client';
import { User } from '@/decorator/user.decorators';
import { AuthUser } from '@/decorator/interface';
import { RegisterUserVo } from './vo/user.entity';
import { Public } from '@/decorator/auth.decorators';

@ApiTags('User')
@Controller('user')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('/register')
  @Public()
  @ApiOperation({ summary: '用户注册' })
  @ApiBody({ type: RegisterUserDto })
  @ApiResponse({ type: RegisterUserVo })
  async register(@Body() user: RegisterUserDto) {
    const options = {
      ...user,
      roles: [RolesEnums.User] as Prisma.JsonArray, // 注册用户默认为普通用户
    };
    const id = await this.userService.register(options);
    return { id: String(id) };
  }

  @Get('/info')
  @ApiOperation({ summary: '获取用户详情' })
  @ApiResponse({ type: UserEntity, status: 200 })
  async getUserDetail(@User() user: AuthUser) {
    const ret = await this.userService.getUserById(user.id);
    return ret;
  }

  @Post('/delete/:id')
  @ApiOperation({ summary: '删除用户' })
  @RequiredRoles([RolesEnums.Admin, RolesEnums.SuperAdmin])
  async delUserById(@Param('id', ParseIntPipe) id: number) {
    const res = await this.userService.delUser(id);
    if (!res) {
      throw new HttpException('用户不存在', HttpStatus.NOT_ACCEPTABLE);
    }
    return null;
  }

  @Post('/create')
  @ApiBody({ type: CreateUserDto })
  @ApiOperation({ summary: '创建用户' })
  async addUser(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
    const user = {
      ...createUserDto,
      roles: ['USER'] as Prisma.JsonArray,
      createdAt: getIOSTime(),
    };
    const ret = await this.userService.addUser(user);
    return new UserEntity(ret);
  }
}
