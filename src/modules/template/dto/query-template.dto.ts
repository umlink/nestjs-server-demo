import { IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class TemplateQueryDto {
  @IsInt()
  @ApiProperty()
  pageNum: number;

  @IsInt()
  @ApiProperty()
  pageSize: number;

  @ApiProperty({ required: false })
  isVip?: number;

  @ApiProperty({ required: false })
  keywords?: string;
}
