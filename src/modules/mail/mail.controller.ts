import { Controller, Get, HttpException, HttpStatus, Query } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Get('code')
  async sendEmailCode(@Query('address') address: string) {
    const code = Math.random().toString().slice(2, 8);
    await this.mailService
      .sendMail({
        to: address,
        subject: '登录验证码',
        html: `<p>您的登录验证码是 <b>${code}</b> ，有效时间 5 分钟</p>`,
      })
      .catch((res) => {
        throw new HttpException('发送失败，请重试', HttpStatus.GATEWAY_TIMEOUT);
      });
    return '发送成功';
  }
}
