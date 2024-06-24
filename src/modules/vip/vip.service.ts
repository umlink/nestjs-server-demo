import { Injectable } from '@nestjs/common';
import { UpdateVipDto } from './dto/update-vip.dto';
import { PrismaService } from '@/modules/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class VipService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.VipCreateInput) {
    return this.prisma.vip.create({ data });
  }

  findAll() {
    return `This action returns all vip`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vip`;
  }

  update(id: number, updateVipDto: UpdateVipDto) {
    return `This action updates a #${id} vip`;
  }

  remove(id: number) {
    return `This action removes a #${id} vip`;
  }
}
