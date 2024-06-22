import { PartialType } from '@nestjs/swagger';
import { CreateVipTypeDto } from './create-vip-type.dto';

export class UpdateVipTypeDto extends PartialType(CreateVipTypeDto) {}
