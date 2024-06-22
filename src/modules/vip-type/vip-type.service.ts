import { Injectable } from '@nestjs/common';
import { CreateVipTypeDto } from './dto/create-vip-type.dto';
import { UpdateVipTypeDto } from './dto/update-vip-type.dto';

@Injectable()
export class VipTypeService {
  create(createVipTypeDto: CreateVipTypeDto) {
    return 'This action adds a new vipType';
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
