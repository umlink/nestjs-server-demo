import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { getReasonPhrase } from 'http-status-codes';

@Injectable()
export class ResultFormatInterceptor implements NestInterceptor {
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
