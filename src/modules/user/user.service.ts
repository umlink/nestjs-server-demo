import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  GerUsers(): string {
    return 'Hello World!';
  }
}
