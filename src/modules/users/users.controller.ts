import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ConfigService } from '../config/config.service';
import { getIOSTime } from '@/tools/utils/time.utils';
import { Roles } from '@/tools/decorator/roles.decorator';
import { RoleEnum } from '@/constants/role.enum';

@Controller('user')
export class UsersController {
  constructor(
    private readonly userService: UsersService,
    private readonly configService: ConfigService,
  ) {}
  @Get('/detail/:id')
  @Roles([RoleEnum.admin, RoleEnum.superAdmin])
  async getUserDetail(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getUserById(id);
  }
  @Post('/delete/:id')
  @Roles([RoleEnum.admin, RoleEnum.superAdmin])
  async delUserById(@Param('id', ParseIntPipe) id: number) {
    const res = await this.userService.delUser(id);
    if (!res) {
      throw new HttpException('用户不存在', HttpStatus.NOT_ACCEPTABLE);
    }
    return null;
  }
  @Post('/create')
  addUser(@Body() createUserDto: CreateUserDto) {
    const user = {
      ...createUserDto,
      createdAt: getIOSTime(),
      updatedAt: getIOSTime(),
    };
    return this.userService.addUser(user);
  }
}
