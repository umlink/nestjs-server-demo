import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class EmailCodeLoginDto {
  @IsString()
  @ApiProperty()
  email: string;

  @IsString()
  @ApiProperty()
  code: string;
}

export class EmailPwdLoginDto {
  @IsString()
  @ApiProperty()
  email: string;

  @IsString()
  @ApiProperty()
  password: string;
}
