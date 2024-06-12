import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '../config/config.service';
import { Roles } from '@/utils/decorator/roles.decorator';
import { RoleEnum } from '@/constants/role.enum';

@Controller('test')
export class TestController {
  constructor(private readonly configService: ConfigService) {}
  @Get('/config')
  getConfig(): string {
    return this.configService.get('HOST_NAME');
  }
  @Get('/test2')
  @Roles([RoleEnum.admin, RoleEnum.superAdmin]) // 只有管理员和超管可以访问
  getTest2(): string {
    return this.configService.get('HOST_NAME');
  }
}
