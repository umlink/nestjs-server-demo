import { Controller, Get, Header, Inject, Res } from '@nestjs/common';
import { PuppeteerService } from '@/modules/puppeteer/puppeteer.service';
import { ApiTags } from '@nestjs/swagger';
import { Api } from '@/decorator/api.decorator';
import { NotLogin } from '@/decorator/auth.decorators';
import { FastifyReply } from 'fastify';

@ApiTags('Puppeteer')
@Controller('puppeteer')
export class PuppeteerController {
  @Inject(PuppeteerService)
  private puppeteerService: PuppeteerService;

  @Get('generate-pdf')
  @NotLogin()
  @Api({ summary: '生成简历' })
  @Header('Content-Type', 'application/pdf')
  async generateHtmlToPdf(@Res() res: FastifyReply) {
    const bff = await this.puppeteerService.genPDF({ url: 'https://www.baidu.com' });
    return res.send(bff);
  }
}
