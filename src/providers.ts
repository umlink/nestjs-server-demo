import { Provider } from '@nestjs/common/interfaces/modules/provider.interface';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { JwtAuthGuard } from '@/modules/auth/auth.guard';
import { RolesGuard } from '@/guard/roles.guard';
import { VipGuard } from '@/guard/vip.guard';
import { ThrottlerGuard } from '@nestjs/throttler';
import { PostInterceptor } from '@/interceptor/post.interceptor';
import { ResponseInterceptor } from '@/interceptor/response.interceptor';
import { ClassSerializerInterceptor } from '@nestjs/common';
import { HttpExceptionFilter } from '@/filters/http-exception.filters';
import { DemoService } from '@/schedule/demo.service';

const appModules: Provider[] = [
  DemoService,
  {
    provide: APP_GUARD,
    useClass: JwtAuthGuard, // 授权认证
  },
  {
    provide: APP_GUARD,
    useClass: RolesGuard, // 角色守卫
  },
  {
    provide: APP_GUARD,
    useClass: VipGuard, // 授权认证会员检测
  },
  {
    provide: APP_GUARD,
    useClass: ThrottlerGuard, // 全局限流
  },
  {
    provide: APP_INTERCEPTOR,
    useClass: PostInterceptor, // 处理 post 201
  },
  {
    provide: APP_INTERCEPTOR,
    useClass: ResponseInterceptor, // 统一响应处理
  },
  {
    provide: APP_INTERCEPTOR,
    useClass: ClassSerializerInterceptor, // 响应体根据某些规则序列化
  },
  {
    provide: APP_FILTER,
    useClass: HttpExceptionFilter, // 异常捕获
  },
];
export default appModules;
