import { Module } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import { ConfigService } from '@/modules/config/config.service';
import winston from 'winston';
import 'winston-daily-rotate-file';
import * as Transport from 'winston-transport';

const getTransportByLevel = (configService: ConfigService, level?: string) => {
  const params = {
    level: undefined,
    dirname: configService.get('LOG_PATH'),
    filename: `%DATE%-${level || 'info'}.log`,
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: configService.get('LOG_MAX_SIZE'),
    maxFiles: configService.get('LOG_MAX_FILES'),
    format: winston.format.combine(
      winston.format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss',
      }),
      winston.format.printf(
        (info) =>
          `${info.timestamp} [${info.level}] : ${info.message} ${
            Object.keys(info).length ? JSON.stringify(info, null, level === 'error' ? 2 : 0) : ''
          } ${info['stack'] || ''}`,
      ),
    ),
  };
  if (level) {
    params.level = level;
  }
  return new winston.transports.DailyRotateFile(params);
};
// https://bald3r.wang/2023/08/01/NestJS-%E5%85%A5%E9%97%A8%EF%BC%88%E4%BA%94%EF%BC%89%E4%BF%9D%E5%AD%98-Log-%E4%B8%BA%E6%96%87%E4%BB%B6/#%E5%9C%A8%E9%A1%B9%E7%9B%AE%E4%B8%AD%E5%BC%95%E5%85%A5-winston
@Module({
  imports: [
    WinstonModule.forRootAsync({
      inject: [ConfigService],
      useFactory(configService: ConfigService) {
        const transports: Transport[] = [
          getTransportByLevel(configService),
          getTransportByLevel(configService, 'error'),
        ];
        if (process.env.NODE_ENV === 'development') {
          transports.push(
            new winston.transports.Console({
              // level: "info", 可指定一种日志类型，不指定，则为全部
              format: winston.format.combine(
                winston.format.timestamp({
                  format: 'YYYY-MM-DD HH:mm:ss',
                }),
                winston.format.printf(
                  (info) =>
                    `${info.timestamp} [${info.level}] : ${info.message} ${
                      Object.keys(info).length ? JSON.stringify(info, null) : ''
                    }`,
                ),
              ),
            }),
          );
        }
        return {
          transports,
        };
      },
    }),
  ],
})
export class LogsModule {}
