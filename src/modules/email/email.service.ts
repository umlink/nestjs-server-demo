import { Injectable } from '@nestjs/common';
import { createTransport, Transporter } from 'nodemailer';
import { ConfigService } from '@/modules/config/config.service';

@Injectable()
export class EmailService {
  private transporter: Transporter;

  constructor(private configService: ConfigService) {
    this.transporter = createTransport({
      host: this.configService.get('MAIL_SERVER_HOST'),
      port: this.configService.get('MAIL_SERVER_PORT'),
      secure: this.configService.get('MAIL_SERVER_SECURE') === 'True',
      auth: {
        user: this.configService.get('MAIL_USER_EMAIL'),
        pass: this.configService.get('MAIL_AUTH_CODE'),
      },
    });
  }

  async sendMail({ to, subject, html }) {
    await this.transporter.sendMail({
      from: {
        name: this.configService.get('MAIL_FORM_NAME'),
        address: this.configService.get('MAIL_USER_EMAIL'),
      },
      to,
      subject,
      html,
    });
  }
}
