import { ArgumentsHost, Catch, ExceptionFilter, HttpException, Logger } from '@nestjs/common';
import { FastifyReply, FastifyRequest } from 'fastify';
import { getReasonPhrase } from 'http-status-codes';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<FastifyReply>();
    const request = ctx.getRequest<FastifyRequest['raw']>();
    const code = exception.getStatus();
    const exceptionResponse: any = exception.getResponse();
    const errMsg = typeof exceptionResponse === 'object' ? exceptionResponse.message : exception.message;
    const message = errMsg || getReasonPhrase(code) || 'Server error';
    // 日志打印
    Logger.log(`${request.url} - ${message}`);
    response.status(code).send({
      code,
      message: message,
      success: false,
      data: null,
      timestamp: new Date().toISOString(),
    });
  }
}
