import { Module } from '@nestjs/common';
import { VipTypeService } from './vip-type.service';
import { VipTypeController } from './vip-type.controller';

@Module({
  controllers: [VipTypeController],
  providers: [VipTypeService],
})
export class VipTypeModule {}
