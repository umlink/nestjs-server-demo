import { IsString } from 'class-validator';

export class SendMailCodeDto {
  @IsString()
  address: string;
}
