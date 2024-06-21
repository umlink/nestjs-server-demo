import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(username: string, password: string) {
    const user = await this.usersService.getUserByName({
      username,
      password,
    });
    if (user?.password !== password) {
      throw new UnauthorizedException();
    }
    return {
      access_token: this.jwtService.sign(user),
    };
  }
}
