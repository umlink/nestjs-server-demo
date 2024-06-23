import { Controller, Get, Query } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Get('code')
  async sendEmailCode(@Query('address') address) {
    console.log(address);
    const code = Math.random().toString().slice(2, 8);
    await this.mailService.sendMail({
      to: address,
      subject: '登录验证码',
      html: `<p>您的登录验证码是 ${code} ，有效时间 5 分钟</p>`,
    });
    return '发送成功';
  }
}
