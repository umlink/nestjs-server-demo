import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  RequestTimeoutException,
} from '@nestjs/common';
import {
  Observable,
  timeout,
  catchError,
  TimeoutError,
  throwError,
} from 'rxjs';

@Injectable()
export class TimeoutInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      timeout(10000), // 10s 超时设置
      catchError((err) => {
        if (err instanceof TimeoutError) {
          return throwError(() => RequestTimeoutException);
        }
        return throwError(() => err);
      }),
    );
  }
}
