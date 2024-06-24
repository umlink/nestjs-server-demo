import { Body, Controller, Delete, Get, Param, Patch } from '@nestjs/common';
import { VipService } from './vip.service';
import { UpdateVipDto } from './dto/update-vip.dto';

@Controller('vip')
export class VipController {
  constructor(private readonly vipService: VipService) {}

  @Get()
  findAll() {
    return this.vipService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vipService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVipDto: UpdateVipDto) {
    return this.vipService.update(+id, updateVipDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vipService.remove(+id);
  }
}
