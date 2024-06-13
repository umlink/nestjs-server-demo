import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(name: string, pass: string) {
    const user = await this.usersService.getUserByName({
      name,
    });
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    return {
      access_token: this.jwtService.sign(user),
    };
  }
}
