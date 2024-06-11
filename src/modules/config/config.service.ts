import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';
import { Injectable, Inject } from '@nestjs/common';
import { EnvConfig } from './interfaces';
import { CONFIG_OPTIONS } from '../../constants/dynamic-module';

@Injectable()
export class ConfigService {
  private readonly envConfig: EnvConfig;

  constructor(@Inject(CONFIG_OPTIONS) private options: Partial<EnvConfig>) {
    const filePath = `.env.${process.env.NODE_ENV || 'dev'}`;
    const envFile = path.resolve(__dirname, '../../../', options.folder, filePath);
    this.envConfig = dotenv.parse(fs.readFileSync(envFile));
    console.log(this.envConfig);
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}
