import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { UsersModule } from './modules/users/users.module';
import { ConfigModule } from './modules/config/config.module';
import { TestModule } from './modules/test/test.modules';
import { AuthModule } from './modules/auth/auth.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { HttpExceptionFilter } from '@/filters/http-exception.filters';
import { RolesGuard } from '@/guard/roles.guard';
import { JwtAuthGuard } from '@/modules/auth/auth.guard';
import { PostInterceptor } from '@/interceptor/post.interceptor';
import { ResponseInterceptor } from '@/interceptor/response.interceptor';

/**
 * ThrottlerModule: 限流
 * 一秒钟内调用次数不超过 3 次、10 秒内调用次数不超过 20 次、一分钟内调用次数不超过 100 次
 */
const throttleOptions = [
  {
    name: 'short',
    ttl: 1000,
    limit: 3,
  },
  {
    name: 'medium',
    ttl: 10000,
    limit: 20,
  },
  {
    name: 'long',
    ttl: 60000,
    limit: 100,
  },
];
@Module({
  imports: [
    ConfigModule.register({ folder: 'config' }),
    ThrottlerModule.forRoot(throttleOptions),
    TestModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [],
  providers: [
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
      provide: APP_FILTER,
      useClass: HttpExceptionFilter, // 异常捕获
    },
  ],
})
// 设置中间件，可指定路由可方法
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
