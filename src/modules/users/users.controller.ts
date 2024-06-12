import {
  Body,
  Controller,
  Get,
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
  @Post('/list')
  async findAll(): Promise<string> {
    return '获取成功';
  }
  @Post('/create')
  addUser(@Body() createUserDto: CreateUserDto) {
    const user = {
      ...createUserDto,
      createdAt: getIOSTime(),
      updatedAt: getIOSTime(),
    };
    console.log(user);
    return this.userService.addUser(user);
  }
}
