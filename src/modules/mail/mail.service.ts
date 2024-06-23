import { Injectable } from '@nestjs/common';
import { createTransport, Transporter } from 'nodemailer';
import { ConfigService } from '@/modules/config/config.service';

@Injectable()
export class MailService {
  transporter: Transporter;

  constructor(private configService: ConfigService) {
    this.transporter = createTransport({
      host: 'smtp.163.com',
      port: 465,
      secure: false,
      auth: {
        user: this.configService.get('MAIL_USER_EMAIL'),
        pass: this.configService.get('MAIL_AUTH_CODE'),
      },
    });
  }

  async sendMail({ to, subject, html }) {
    await this.transporter
      .sendMail({
        from: {
          name: '系统邮件',
          address: this.configService.get('MAIL_USER_EMAIL'),
        },
        to,
        subject,
        html,
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
