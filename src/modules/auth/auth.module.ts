import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@/modules/config/config.service';
import { EmailModule } from '@/modules/email/email.module';
import { VipModule } from '@/modules/vip/vip.module';
import { VipTypeModule } from '@/modules/vip-type/vip-type.module';

@Module({
  imports: [
    UsersModule,
    EmailModule,
    VipModule,
    VipTypeModule,
    JwtModule.registerAsync({
      global: true,
      inject: [ConfigService],
      useFactory(config: ConfigService) {
        return {
          secret: config.get('JWT_SECRET'),
          signOptions: { expiresIn: config.get('JWT_EXPIRES_IN') },
        };
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
