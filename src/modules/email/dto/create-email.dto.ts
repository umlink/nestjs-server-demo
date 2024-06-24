import { IsString } from 'class-validator';

export class SendMailCodeDto {
  @IsString()
  email: string;
}
