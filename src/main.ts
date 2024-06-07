import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import logger from './middleware/logfn.middleware';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

async function mainApp() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: true }),
  );
  // 注册全局函数式中间件
  app.use(logger);
  await app.listen(8088, '0.0.0.0');
}
mainApp().then((r) => console.info('server started by 0.0.0.0:8088'));
