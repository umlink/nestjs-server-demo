import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import fastifyCsrf from '@fastify/csrf-protection';
import helmet from '@fastify/helmet';
import { Logger, ValidationPipe } from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';
import { EnvConfig } from '@/modules/config/interfaces';

/**
 * ⚠️底层使用 fastify
 */
const envFile = path.resolve(process.cwd(), `.env.${process.env.NODE_ENV}`);
let envConfig: EnvConfig;
try {
  envConfig = dotenv.parse(fs.readFileSync(envFile));
} catch {
  console.log(`请检查配置文件${envFile}是否存在`);
}
/*------------------------------------------------------------------------------------------*/
async function mainApp() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(), // 开启默认日志
  );
  // 开启 NestWinston 日志
  const logger = app.get(WINSTON_MODULE_NEST_PROVIDER);
  app.useLogger(logger);

  // 保护应用免受一些众所周知的 Web 漏洞的攻击
  await app.register(helmet);

  // CSRF 保护
  await app.register(fastifyCsrf);

  // 启用跨源资源共享（CORS）保护机制
  app.enableCors();

  // 设置接口统一前缀
  app.setGlobalPrefix('xxx-api');

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
   * 开启方式后期需定制处理，如：线上自动关闭
   */
  const config = new DocumentBuilder()
    .setTitle('Swagger API')
    .setDescription('这里是关于 swagger api 文档的描述')
    .setVersion('1.0')
    .addTag('🤣Nestjs Service')
    .build();
  const document = SwaggerModule.createDocument(app, config, {
    ignoreGlobalPrefix: false, // 忽略设置 setGlobalPrefix
  });
  SwaggerModule.setup('/swagger-api', app, document);

  /*------------------------------------------------------------------------------*/
  await app.listen(envConfig.SERVER_PORT, '0.0.0.0');
  /*------------------------------------------------------------------------------*/
}
mainApp().then(() => Logger.log(`server started by 0.0.0.0:${envConfig.SERVER_PORT}`));
