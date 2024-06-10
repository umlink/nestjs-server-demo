import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  Logger,
} from '@nestjs/common';
import { FastifyReply, FastifyRequest } from 'fastify';
import { getReasonPhrase } from 'http-status-codes';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<FastifyReply>();
    const request = ctx.getRequest<FastifyRequest['raw']>();
    const code = exception.getStatus();
    console.log(response);
    const message = response.raw.statusMessage || getReasonPhrase(code);

    Logger.log(`${request.url} - ${message}`, '非正常接口请求');

    response.status(code).send({
      code,
      message: message,
      path: request.url,
      timestamp: new Date().toISOString(),
    });
  }
}
