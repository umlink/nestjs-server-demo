import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { jwtConstants } from '../constants';

@Injectable()
export class JwtAdminStrategy extends PassportStrategy(Strategy, 'jwt-admin') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtConstants.secret,
      passReqToCallback: true, // passReqToCallback: true，它允许我们在validate方法中访问req对象。
    });
  }

  async validate(req: Request, payload: any) {
    if (req.url.startsWith('/admin')) {
      return { adminId: payload.sub, adminName: payload.username };
    }
    return null;
  }
}
