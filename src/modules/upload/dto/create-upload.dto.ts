import { Multipart } from '@fastify/multipart';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUploadDto {
  @ApiProperty({ type: 'multipart/form-data', description: '上传文件 multipart/form-data' })
  file: Multipart;
}
