import { IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateVipDto {
  @IsNumber()
  @ApiProperty({ description: '用户 id' })
  userId: Number;

  @IsNumber()
  @ApiProperty({ description: '会员类型id' })
  vipTypeId: Number;
}
