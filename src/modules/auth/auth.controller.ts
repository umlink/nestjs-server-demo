import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { NotLogin } from '@/decorator/auth.decorators';
import { User } from '@/decorator/user.decorators';
import { UserBaseInfoVO } from '@/modules/users/entities/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @NotLogin()
  signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.login(signInDto.username, signInDto.password);
  }
  @Get('profile')
  getProfile(@User() user: UserBaseInfoVO) {
    return user;
  }
}
