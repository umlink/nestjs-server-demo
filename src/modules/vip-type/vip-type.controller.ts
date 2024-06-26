import { Body, Controller, Param, ParseIntPipe, Post } from '@nestjs/common';
import { VipTypeService } from './vip-type.service';
import { CreateVipTypeDto } from './dto/create-vip-type.dto';
import { ApiTags } from '@nestjs/swagger';
import { UpdateVipTypeDto } from '@/modules/vip-type/dto/update-vip-type.dto';
import { Api } from '@/decorator/api.decorator';
import { errorHandler } from '@/utils/prisma-utils';
import { RequiredRoles } from '@/decorator/roles.decorator';
import { RolesEnums } from '@/constants/enums';

@ApiTags('VipType')
@Controller('vip-type')
@RequiredRoles(RolesEnums.Admin, RolesEnums.SuperAdmin)
export class VipTypeController {
  constructor(private readonly vipTypeService: VipTypeService) {}

  @Post('create')
  @Api({
    summary: '创建会员类型',
    reqType: CreateVipTypeDto,
  })
  createVipType(@Body() createVipTypeDto: CreateVipTypeDto) {
    return this.vipTypeService.create(createVipTypeDto);
  }

  @Post('/update/:id')
  @Api({
    summary: '更新会员类型',
    reqType: UpdateVipTypeDto,
    resType: String,
  })
  async updateVipType(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateVipTypeDto) {
    await this.vipTypeService.update(id, data).catch(errorHandler);
    return null;
  }
}
