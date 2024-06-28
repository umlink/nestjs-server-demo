import { Injectable } from '@nestjs/common';
import { initPuppeteerPool, waitTime } from '@/utils/puppeteer-utils';

@Injectable()
export class PuppeteerService {
  private puppeteerInstance: any;
  constructor() {
    console.log('初始化');
    this.puppeteerInstance = initPuppeteerPool();
  }

  async genPDF(opt) {
    try {
      const browser = await this.puppeteerInstance.use();
      const page = await browser.newPage();
      // await page.setCookie({
      //   name: '__dp_tk__',
      //   value: opt.token,
      //   domain: 'www.developers.pub',
      // });
      await page.goto(opt.url, { waitUntil: 'networkidle0' });
      const pdf = await page.pdf({
        format: 'A4',
        margin: { top: 35, bottom: 35, left: 0, right: 0 },
      });
      await waitTime(opt.waitTime || 0);
      await page.close();
      return pdf;
    } catch (error) {
      throw error;
    }
  }
}
