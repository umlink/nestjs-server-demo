import { Injectable } from '@nestjs/common';
import { CreateVipTypeDto } from './dto/create-vip-type.dto';
import { UpdateVipTypeDto } from './dto/update-vip-type.dto';
import { PrismaService } from '@/modules/prisma/prisma.service';
import { vip_type_sell_type } from '@prisma/client';

@Injectable()
export class VipTypeService {
  constructor(private readonly prisma: PrismaService) {}

  create(createVipTypeDto: CreateVipTypeDto) {
    return this.prisma.vipType.create({ data: createVipTypeDto });
  }

  getGiftVip() {
    return this.prisma.vipType.findFirst({
      where: {
        sellType: vip_type_sell_type.GIFT,
      },
    });
  }

  findAll() {
    return `This action returns all vipType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vipType`;
  }

  update(id: number, updateVipTypeDto: UpdateVipTypeDto) {
    return this.prisma.vipType.update({
      where: { id },
      data: updateVipTypeDto,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} vipType`;
  }
}
