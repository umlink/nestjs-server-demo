import { ApiProperty } from '@nestjs/swagger';

export class ResVO {
  @ApiProperty({ type: 'number', default: 200 })
  code: number;

  @ApiProperty({ type: 'string', default: 'OK' })
  message: string | string[];

  @ApiProperty({ type: 'boolean' })
  success: boolean;
}
