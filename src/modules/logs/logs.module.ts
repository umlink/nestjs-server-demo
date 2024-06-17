import { Module } from '@nestjs/common';
import { utilities, WinstonModule, WinstonModuleOptions } from 'nest-winston';
import winston, { transports } from 'winston';
import 'winston-daily-rotate-file';
import * as process from 'process';

@Module({
  imports: [
    WinstonModule.forRootAsync({
      inject: [],
      useFactory() {
        const transportsList: WinstonModuleOptions['transports'] = [
          new transports.DailyRotateFile({
            level: 'error',
            dirname: 'logs',
            filename: 'error-%DATE%.log',
            datePattern: 'YYYY-MM-DD',
            zippedArchive: true,
            maxSize: '10m',
            maxFiles: '14d',
            format: winston.format.combine(winston.format.timestamp(), winston.format.simple()),
          }),
          new transports.DailyRotateFile({
            level: 'info',
            dirname: 'logs',
            filename: 'info-%DATE%.log',
            datePattern: 'YYYY-MM-DD',
            zippedArchive: true,
            maxSize: '10m',
            maxFiles: '14d',
            format: winston.format.combine(winston.format.timestamp(), winston.format.simple()),
          }),
        ];
        if (process.env.NODE_ENV === 'development') {
          transportsList.push(
            new transports.Console({
              level: 'info',
              format: winston.format.combine(winston.format.timestamp(), utilities.format.nestLike()),
            }),
          );
        }
        return {
          transports: transportsList,
        };
      },
    }),
  ],
  exports: [],
})
export class LogsModule {}
