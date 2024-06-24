import { IsNumber, IsString } from 'class-validator';

export class EmailCodeLoginDto {
  @IsString()
  email: string;

  @IsNumber()
  code: number;
}

export class EmailPwdLoginDto {
  @IsString()
  email: string;

  @IsString()
  password: string;
}
