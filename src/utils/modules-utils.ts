import { ConfigService } from '@/modules/config/config.service';
import winston from 'winston';
import { ThrottlerOptions } from '@nestjs/throttler';
import { ConsoleTransportOptions } from 'winston/lib/winston/transports';
import * as Transport from 'winston-transport';

export const throttleOptions = (configService: ConfigService): ThrottlerOptions[] => {
  return [
    {
      name: 'short',
      ttl: Number(configService.get('THROTTLE_SHORT_TTL')),
      limit: Number(configService.get('THROTTLE_SHORT_LIMIT')),
    },
    {
      name: 'medium',
      ttl: Number(configService.get('THROTTLE_MEDIUM_TTL')),
      limit: Number(configService.get('THROTTLE_MEDIUM_LIMIT')),
    },
    {
      name: 'long',
      ttl: Number(configService.get('THROTTLE_LONG_TTL')),
      limit: Number(configService.get('THROTTLE_LONG_LIMIT')),
    },
  ];
};

export const getLogTransportByLevel = (configService: ConfigService, level?: string): Transport => {
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

export const consoleLogOption: ConsoleTransportOptions = {
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
};
