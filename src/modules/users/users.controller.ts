import {
  Controller,
  Get,
  Post,
  Param,
  ParseIntPipe,
  Body,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ConfigService } from '../config/config.service';
import { Public } from '@/utils/decorator/auth.decorators';
import { UsersModule } from './users.module';

@Controller('user')
export class UsersController {
  constructor(
    private readonly userService: UsersService,
    private readonly configService: ConfigService,
  ) {}
  @Get('/info/:id')
  @Public()
  async getOneByName(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<UsersModule> {
    return this.userService.getUserByName({ id });
  }
  @Post('/list')
  async findAll(): Promise<string> {
    return '获取成功';
  }
  @Post('/add')
  addUser(@Body() createUserDto: CreateUserDto) {
    return createUserDto;
  }
}
