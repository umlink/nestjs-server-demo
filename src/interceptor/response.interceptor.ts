import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { getReasonPhrase } from 'http-status-codes';

/**
 * 格式化输出内容
 * code: 200 为成功响应
 * 成功响应返回 success: ture,方便前端判断
 */
@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ctx = context.switchToHttp();
    const response = ctx.getResponse();
    const code = response.statusCode;
    const message = response.statusMessage || getReasonPhrase(code);

    return next.handle().pipe(
      map((data) => {
        return {
          code,
          message,
          data: data ?? null,
          success: code === 200,
        };
      }),
    );
  }
}
