import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import fastifyCsrf from '@fastify/csrf-protection';
import helmet from '@fastify/helmet';
import { Logger, ValidationPipe } from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { addResponseWrapper } from '@/utils/modules-utils';
import { ConfigService } from '@/modules/config/config.service';

/**
 * ⚠️底层使用 fastify
 */
async function mainApp() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(), // 开启默认日志
  );
  // 开启 NestWinston 日志
  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));

  // 获取配置信息
  const configService = app.get(ConfigService);
  console.log(configService.getAll());

  // 保护应用免受一些众所周知的 Web 漏洞的攻击
  await app.register(helmet, {
    contentSecurityPolicy: false,
  });

  // CSRF 保护
  await app.register(fastifyCsrf);

  // 启用跨源资源共享（CORS）保护机制
  app.enableCors();

  // 设置接口统一前缀
  app.setGlobalPrefix(configService.get('API_PREFIX'));

  /**
   * 参数校验
   * disableErrorMessages: true 可禁用详细信息
   * whitelist：过滤非 dto 字段
   * transform：自动类型转换
   */
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );
  /**
   * 开启方式后期需定制处理，一般情况下线上需关闭
   * tips: api.json 内容默认访问路由为 [basePath] + '-json', 即 `/swagger-api-json`
   * */
  if (configService.get('API_ENABLED_SWAGGER') === 'True') {
    const config = new DocumentBuilder()
      .setTitle('Swagger API')
      .setDescription('Easy简历前台接口')
      .setVersion('1.0')
      .addTag('🤣Nestjs Service')
      .build();
    const document = addResponseWrapper(
      SwaggerModule.createDocument(app, config, {
        ignoreGlobalPrefix: false, // 忽略设置 setGlobalPrefix
        operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
      }),
    );
    SwaggerModule.setup('/swagger-api', app, document);
  }

  /*------------------------------------------------------------------------------*/
  await app.listen(configService.get('SERVER_PORT'), configService.get('SERVER_HOST'));
  /*------------------------------------------------------------------------------*/
  return configService;
}

mainApp().then((configService) => {
  Logger.log(`server started by ${configService.get('SERVER_HOST')}:${configService.get('SERVER_PORT')}`);
});
