import { IsString } from 'class-validator';

export class EmailCodeLoginDto {
  @IsString()
  email: string;

  @IsString()
  code: string;
}

export class EmailPwdLoginDto {
  @IsString()
  email: string;

  @IsString()
  password: string;
}
