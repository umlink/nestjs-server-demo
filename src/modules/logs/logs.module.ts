import { Module } from '@nestjs/common';
import { WinstonModule, utilities } from 'nest-winston';
import { ConfigService } from '@/modules/config/config.service';
import winston from 'winston';
import 'winston-daily-rotate-file';
import * as Transport from 'winston-transport';

@Module({
  imports: [
    WinstonModule.forRootAsync({
      inject: [ConfigService],
      useFactory(configService: ConfigService) {
        const transports: Transport[] = [
          new winston.transports.DailyRotateFile({
            level: 'error',
            dirname: configService.get('LOG_PATH'),
            filename: 'error-%DATE%.log',
            datePattern: 'YYYY-MM-DD',
            zippedArchive: true,
            maxSize: configService.get('LOG_MAX_SIZE'),
            maxFiles: configService.get('LOG_MAX_FILES'),
            format: winston.format.combine(
              winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
              winston.format.simple(),
            ),
          }),
          new winston.transports.DailyRotateFile({
            level: 'info',
            dirname: configService.get('LOG_PATH'),
            filename: 'info-%DATE%.log',
            datePattern: 'YYYY-MM-DD',
            zippedArchive: true,
            maxSize: configService.get('LOG_MAX_SIZE'),
            maxFiles: configService.get('LOG_MAX_FILES'),
            format: winston.format.combine(
              winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
              winston.format.simple(),
            ),
          }),
          new winston.transports.DailyRotateFile({
            level: 'debug',
            dirname: configService.get('LOG_PATH'),
            filename: 'info-%DATE%.log',
            datePattern: 'YYYY-MM-DD',
            zippedArchive: true,
            maxSize: configService.get('LOG_MAX_SIZE'),
            maxFiles: configService.get('LOG_MAX_FILES'),
            format: winston.format.combine(
              winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
              winston.format.simple(),
            ),
          }),
        ];
        if (process.env.NODE_ENV === 'development') {
          transports.push(
            new winston.transports.Console({
              level: 'info',
              format: winston.format.combine(winston.format.timestamp(), utilities.format.nestLike()),
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
