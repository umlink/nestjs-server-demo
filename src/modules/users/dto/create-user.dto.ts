import { IsEmail, IsString, Min } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Min(2, { message: '名子长度不能小于2' })
  name: string;
  @IsEmail({}, { message: '邮箱格式错误' })
  email: string;
}
