import { IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class TemplateQueryDto {
  @IsInt()
  pageNum: number;

  @IsInt()
  pageSize: number;

  @ApiProperty({ required: false })
  isVip?: number;

  @ApiProperty({ required: false })
  keywords?: string;
}
