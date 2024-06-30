import { Controller, Get, Header, Inject, Query, Req, Res } from '@nestjs/common';
import { PuppeteerService } from '@/modules/puppeteer/puppeteer.service';
import { ApiTags } from '@nestjs/swagger';
import { Api } from '@/decorator/api.decorator';
import { NotLogin } from '@/decorator/auth.decorators';
import { FastifyReply, FastifyRequest } from 'fastify';
import { ConfigService } from '@/modules/config/config.service';

@ApiTags('Puppeteer')
@Controller('puppeteer')
export class PuppeteerController {
  @Inject(PuppeteerService)
  private puppeteerService: PuppeteerService;
  @Inject(ConfigService)
  private configService: ConfigService;

  @Get('generate-pdf')
  @NotLogin()
  @Api({ summary: '生成简历' })
  @Header('Content-Type', 'application/pdf')
  async generateHtmlToPdf(
    @Req() req: FastifyRequest,
    @Res() res: FastifyReply,
    @Query('url') url: string,
  ) {
    const bff = await this.puppeteerService.genPDF({
      url,
      waitTime: 100,
      token: req.headers[this.configService.get('JWT_AUTH_KEY')] as string,
    });
    res.send(bff);
  }
}
