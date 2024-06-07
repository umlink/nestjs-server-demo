import { Controller, Get, Param } from '@nestjs/common';
import { ConfigService } from '../config/config.service';

@Controller('test')
export class TestController {
  constructor (private readonly configService: ConfigService) {}
  @Get('/config')
  getConfig (): string {
    return this.configService.get('HOST_NAME')
  }
  // @HttpCode() 自定义先
  // @Header('Cache-Control', 'none')
  // @Redirect('https://nestjs.com', 301)
}
