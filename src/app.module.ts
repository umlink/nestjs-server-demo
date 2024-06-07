import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserController } from './user/user.controller';
import { AppService } from './app.service';
import {UserService} from './user/user.service';
import { TestController } from './test/test.controller';

@Module({
  imports: [],
  controllers: [AppController, UserController, TestController],
  providers: [AppService, UserService],
})
export class AppModule {}
