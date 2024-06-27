import { BadRequestException, Controller, Inject, Post, Req } from '@nestjs/common';
import { UploadService } from './upload.service';
import { ApiTags } from '@nestjs/swagger';
import { Api } from '@/decorator/api.decorator';
import { ConfigService } from '@/modules/config/config.service';
import { FastifyRequest } from 'fastify';

@ApiTags('Upload')
@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Inject(ConfigService)
  private configService: ConfigService;

  @Post('file')
  @Api({ summary: '单文件上传' })
  async create(@Req() req: FastifyRequest) {
    const file: any = await req.file({ limits: { files: 1 } });
    const buffer = await file.toBuffer();
    const maxSize = Number(this.configService.get('UPLOAD_MAX_SIZE'));
    if (buffer.length > 1024 * 1024 * maxSize) {
      throw new BadRequestException(`上传文件最大限制为${maxSize}M`);
    }
    return this.uploadService.uploadToQiNiu(file.filename, buffer).catch((errMsg) => {
      throw new BadRequestException(errMsg);
    });
  }
}
