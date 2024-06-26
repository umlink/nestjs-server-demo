import { IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class QueryResumeDto {
  @IsInt()
  @ApiProperty()
  pageNum: number;

  @IsInt()
  @ApiProperty()
  pageSize: number;
}
