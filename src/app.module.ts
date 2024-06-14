import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';
import { UsersModule } from './modules/users/users.module';
import { ConfigModule } from './modules/config/config.module';
import { TestModule } from './modules/test/test.modules';
import { AuthModule } from './modules/auth/auth.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { CacheModule } from '@nestjs/cache-manager';
import { ScheduleModule } from '@nestjs/schedule';
import { PrismaModule } from '@/modules/prisma/prisma.module';
import { LogsModule } from '@/modules/logs/logs.module';
import providers from '@/providers';

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
    CacheModule.register({
      isGlobal: true,
      ttl: 1000 * 60,
      max: 1000 * 60 * 60,
    }),
    ScheduleModule.forRoot(),
    ThrottlerModule.forRoot(throttleOptions),
    LogsModule,
    PrismaModule,
    TestModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [],
  providers,
})
// 设置中间件，可指定路由可方法
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
