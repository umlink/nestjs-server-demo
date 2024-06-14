import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';
import { UsersModule } from './modules/users/users.module';
import { ConfigModule } from './modules/config/config.module';
import { TestModule } from './modules/test/test.modules';
import { AuthModule } from './modules/auth/auth.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { CacheModule } from '@nestjs/cache-manager';
import { ScheduleModule } from '@nestjs/schedule';
import { PrismaModule } from 'nestjs-prisma';
import { LogsModule } from '@/modules/logs/logs.module';
import providers from '@/providers';
import { ConfigService } from '@/modules/config/config.service';

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
    ConfigModule.register({ folder: '' }),
    CacheModule.registerAsync({
      isGlobal: true,
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          ttl: 1000 * Number(configService.get('CACHE_HTTP_GLOBAL_TTL')),
          max: 1000 * Number(configService.get('CACHE_HTTP_GLOBAL_MAX')),
        };
      },
    }),
    PrismaModule.forRootAsync({
      isGlobal: true,
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const dbUrl = configService.get('DATABASE_URL');
        return {
          prismaOptions: {
            log: ['info', 'query'],
            datasourceUrl: dbUrl,
          },
          explicitConnect: configService.get('DATABASE_EXPLICIT_CONNECT') === 'True',
        };
      },
    }),
    ScheduleModule.forRoot(),
    ThrottlerModule.forRoot(throttleOptions),
    LogsModule,
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
