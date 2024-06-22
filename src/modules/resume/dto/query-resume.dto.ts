import { IsInt } from 'class-validator';

export class QueryResumeDto {
  @IsInt()
  pageNum: number;

  @IsInt()
  pageSize: number;
}
