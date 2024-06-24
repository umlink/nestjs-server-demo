import { Body, Controller, HttpException, HttpStatus, Inject, Post } from '@nestjs/common';
import { EmailService } from './email.service';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { Api } from '@/decorator/api.decorator';
import { ApiTags } from '@nestjs/swagger';
import { SendMailCodeDto } from '@/modules/email/dto/create-email.dto';

@ApiTags('邮箱服务')
@Controller('email')
export class EmailController {
  constructor() {}
  @Inject(EmailService)
  private readonly mailService: EmailService;

  @Inject(CACHE_MANAGER)
  private cache: Cache;

  @Post('/send-code')
  @Api({
    summary: '发送邮箱验证码',
    reqType: SendMailCodeDto,
  })
  async sendEmailCode(@Body() data: SendMailCodeDto) {
    const code = Math.random().toString().slice(2, 8);
    await this.mailService
      .sendMail({
        to: data.address,
        subject: '登录验证码',
        html: `<p>您的登录验证码是 <b>${code}</b> ，有效时间 5 分钟</p>`,
      })
      .catch((res) => {
        console.log(res);
        throw new HttpException('发送失败，请重试', HttpStatus.GATEWAY_TIMEOUT);
      });
    // 设置到缓存中 5分钟过去
    await this.cache.set(data.address, code, 1000 * 60 * 5);
    return '发送成功';
  }
}
