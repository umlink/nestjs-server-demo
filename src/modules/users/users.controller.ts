import { Controller, Get, Post, Param, HttpException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateCatDto } from './dto/create-user.dto';
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
  async getOneByName(@Param('id') id: string): Promise<UsersModule> {
    return this.userService.getUserByName({ id: Number(id) });
  }
  @Post('/list')
  findAll() {
    throw new HttpException('授权失败', 401);
  }
}
