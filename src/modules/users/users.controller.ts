import { Controller, Get, Query, Post, Param, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateCatDto } from './dto/create-user.dto';
import { ConfigService } from '../config/config.service';

@Controller('user')
export class UsersController {
  constructor(
    private readonly userService: UsersService,
    private readonly configService: ConfigService,
  ) {}
  @Get('/info/:id')
  getOne(@Param('id') id: string): string {
    return id;
  }
  @Post('/list')
  findAll(@Body() user: CreateCatDto) {
    console.log(user);
    return [];
  }
}
