import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { IS_VIP_KEY } from '@/decorator/vip.decorators';

@Injectable()
export class VipGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isVip = this.reflector.getAllAndOverride<boolean>(IS_VIP_KEY, [context.getHandler(), context.getClass()]);
    if (isVip) {
      const request = context.switchToHttp().getRequest();
      if (request.user.isVip) {
        /**
         * 如果是会员
         * 可检测会员到期时间等其它逻辑
         */
        return true;
      }
      throw new UnauthorizedException('权限不足');
    }
    return true;
  }
}
