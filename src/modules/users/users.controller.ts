import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ConfigService } from '../config/config.service';
import { getIOSTime } from '@/utils/time-utils';
import { RequiredRoles } from '@/decorator/roles.decorator';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserEntity } from '@/modules/users/entities/user.entity';
import { RolesEnums } from '@/constants/enums';

@ApiTags('User')
@Controller('user')
export class UsersController {
  constructor(
    private readonly userService: UsersService,
    private readonly configService: ConfigService,
  ) {}

  @Get('/detail/:id')
  @ApiOperation({ summary: '获取用户详情' })
  async getUserDetail(@Param('id', ParseIntPipe) id: number): Promise<UserEntity> {
    const ret = await this.userService.getUserById(id);
    return new UserEntity(ret);
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
      createdAt: getIOSTime(),
      updatedAt: getIOSTime(),
    };
    const ret = await this.userService.addUser(user);
    return new UserEntity(ret);
  }
}
