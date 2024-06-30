import { Inject, Injectable } from '@nestjs/common';
import { initPuppeteerPool, waitTime } from '@/utils/puppeteer-utils';
import { ConfigService } from '@/modules/config/config.service';

@Injectable()
export class PuppeteerService {
  private puppeteerInstance: any;

  @Inject(ConfigService)
  private configService: ConfigService;

  constructor() {
    this.puppeteerInstance = initPuppeteerPool();
  }

  async genPDF(opt: { url: string; token?: string; waitTime?: number }) {
    try {
      const browser = await this.puppeteerInstance.use();
      const page = await browser.newPage();
      await page.setExtraHTTPHeaders({
        [this.configService.get('JWT_AUTH_KEY')]: opt.token,
      });

      await page.goto(opt.url, { waitUntil: 'networkidle0' });
      await waitTime(opt.waitTime || 0);
      const pdf = await page.pdf({
        format: 'A4',
        margin: {
          top: 30,
          bottom: 30,
          left: 25,
          right: 25,
        },
      });
      await page.close();
      return pdf;
    } catch (error) {
      throw error;
    }
  }
}
