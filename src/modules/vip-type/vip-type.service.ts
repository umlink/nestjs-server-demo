import { Injectable } from '@nestjs/common';
import { CreateVipTypeDto } from './dto/create-vip-type.dto';
import { UpdateVipTypeDto } from './dto/update-vip-type.dto';
import { PrismaService } from '@/modules/prisma/prisma.service';
import { vip_type_sell_type } from '@prisma/client';

@Injectable()
export class VipTypeService {
  constructor(private readonly prisma: PrismaService) {}

  create(createVipTypeDto: CreateVipTypeDto) {
    return 'This action adds a new vipType';
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
    return `This action updates a #${id} vipType`;
  }

  remove(id: number) {
    return `This action removes a #${id} vipType`;
  }
}
