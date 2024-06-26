import { Prisma } from '@prisma/client';
import { $Enums } from '.prisma/client';

export class VipTypeItemVo {
  id: number;
  userId: string;
  title: string;
  description: string;
  equity: Prisma.JsonValue;
  price: number;
  originPrice: number;
  duration: number;
  sellType: $Enums.vip_type_sell_type;
}
