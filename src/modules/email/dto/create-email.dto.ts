import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SendMailCodeDto {
  @IsString()
  @ApiProperty()
  email: string;
}
