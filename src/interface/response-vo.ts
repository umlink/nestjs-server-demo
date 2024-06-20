import { ApiProperty } from '@nestjs/swagger';

export class ResVO<T> {
  @ApiProperty({ type: 'object' })
  data: T;

  @ApiProperty({ type: 'number', default: 200 })
  code: number;

  @ApiProperty({ type: 'string', default: 'OK' })
  message: string | string[];

  @ApiProperty({ type: 'boolean' })
  success: boolean;

  @ApiProperty({ type: 'string', default: new Date().toISOString(), required: false })
  timestamp?: string;
}
