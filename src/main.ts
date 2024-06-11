import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import logger from './middleware/logfn.middleware';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import fastifyCsrf from '@fastify/csrf-protection';
import helmet from '@fastify/helmet';
import { ResultFormatInterceptor } from './utils/interceptor/result-format-interceptor';

/**
 * ⚠️底层使用 fastify
 */
async function mainApp() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: true }), // 开启默认日志
  );
  // 保护应用免受一些众所周知的 Web 漏洞的攻击
  await app.register(helmet);
  // CSRF 保护
  await app.register(fastifyCsrf);
  // 启用跨源资源共享（CORS）保护机制
  app.enableCors();
  // 设置接口统一前缀
  // app.setGlobalPrefix('api');
  // 格式化响应体
  app.useGlobalInterceptors(new ResultFormatInterceptor());
  // 注册全局函数式中间件
  app.use(logger);
  /**
   * 开启方式后期需定制处理，如：线上自动关闭
   */
  const config = new DocumentBuilder()
    .setTitle('Swagger API')
    .setDescription('这里是关于 swagger api 文档的描述')
    .setVersion('1.0')
    .addTag('😄Nestjs Service')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger-api', app, document);
  /************************************************************************/
  await app.listen(8088, '0.0.0.0');
}
mainApp().then(() => console.info('server started by 0.0.0.0:8088'));
