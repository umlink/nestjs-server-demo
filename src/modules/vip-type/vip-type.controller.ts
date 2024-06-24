import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { VipTypeService } from './vip-type.service';
import { CreateVipTypeDto } from './dto/create-vip-type.dto';
import { UpdateVipTypeDto } from './dto/update-vip-type.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('VipType')
@Controller('vip-type')
export class VipTypeController {
  constructor(private readonly vipTypeService: VipTypeService) {}

  @Post()
  create(@Body() createVipTypeDto: CreateVipTypeDto) {
    return this.vipTypeService.create(createVipTypeDto);
  }

  @Get()
  findAll() {
    return this.vipTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vipTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVipTypeDto: UpdateVipTypeDto) {
    return this.vipTypeService.update(+id, updateVipTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vipTypeService.remove(+id);
  }
}
