import { Transform } from 'class-transformer';

export class TemplateQuery {
  @Transform((v) => +v)
  pageNum: number;
  @Transform((v) => +v)
  pageSize: number;
  @Transform((v) => +v)
  isVip?: number;
  keywords?: string;
}
