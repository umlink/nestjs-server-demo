import { ApiProperty } from '@nestjs/swagger';

export class ExportPdfDto {
  @ApiProperty()
  url: string;
}
