import { BadRequestException, Body, Controller, Inject, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { NotLogin } from '@/decorator/auth.decorators';
import { EmailCodeLoginDto, EmailPwdLoginDto } from '@/modules/auth/dto/login.dto';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { Api } from '@/decorator/api.decorator';
import { EmailService } from '@/modules/email/email.service';
import { ApiTags } from '@nestjs/swagger';
import { LoginVO } from '@/modules/auth/vo/login.vo';
import { VipService } from '@/modules/vip/vip.service';
import { getFutureDay, getIOSTime } from '@/utils/time-utils';
import { VipTypeService } from '@/modules/vip-type/vip-type.service';

@ApiTags('登录授权')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Inject(CACHE_MANAGER)
  private cache: Cache;

  @Inject(VipService)
  private readonly vipServer: VipService;

  @Inject(VipService)
  private readonly vipTypeServer: VipTypeService;

  @Inject(EmailService)
  private mailServer: EmailService;

  @Post('email-code')
  @NotLogin()
  @Api({
    summary: '邮箱验证码登录/注册',
    reqType: EmailCodeLoginDto,
    resType: LoginVO,
  })
  async emailCodeLogin(@Body() loginDto: EmailCodeLoginDto) {
    const code = await this.cache.get(loginDto.email);
    if (!code) {
      throw new BadRequestException('验证码不存在或已过期');
    }
    // 删除验证码
    await this.cache.del(loginDto.email);
    const res = await this.authService.loginByEmailCode(loginDto.email, loginDto.code);
    if (res.code) {
      await this.mailServer.sendMail({
        to: loginDto.email,
        subject: '登录密码',
        html: `<p>您的初始登录密码为: <b>${res.code}</b> ，有妥善保存，可在个人中心中修改密码</p>`,
      });
      // 第一次登录赠送会员,赠送会员售卖类型为 GIFT 的会员
      const giftVip = await this.vipTypeServer.getGiftVip();
      await this.vipServer.create({
        userId: res.user.id,
        vipTypeId: giftVip.duration,
        startTime: getIOSTime(),
        expireTime: getFutureDay(giftVip.duration),
      });
    }
    return {
      token: res.access_token,
      isRegister: !!res.code,
    };
  }

  @Post('email-pwd')
  @NotLogin()
  @Api({
    summary: '邮箱密码登录',
    reqType: EmailPwdLoginDto,
    resType: LoginVO,
  })
  async emailPwdLogin(@Body() loginDto: EmailPwdLoginDto) {
    const res = await this.authService.loginByEmailPwd({
      email: loginDto.email,
      password: loginDto.password,
    });
    return {
      access_token: res.access_token,
      isRegister: false,
    };
  }
}
