import { Controller, Get, Query, Post, Param, Body } from '@nestjs/common';
import { UserService } from './user.service';
import {CreateCatDto} from './dto/create-user.dto';
import {ConfigService} from '../config/config.service';

@Controller('user')
// @Controller({ host: 'admin.example.com' })
export class UserController {
  constructor(private readonly userService: UserService, private readonly configService: ConfigService) {
  }
  @Get('/all')
  findAll(@Query('version') version: string): string {
    return this.userService.GerUsers()
  }
  @Post('/add')
  addUser (@Body() user: CreateCatDto) {
    console.log(user)
  }
}