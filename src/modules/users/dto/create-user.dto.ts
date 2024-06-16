import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsString()
  @Length(2, 10)
  username: string;

  @IsNotEmpty()
  @Length(4, 18)
  password: string;

  @IsString()
  avatar: string;

  @IsEmail({}, { message: '邮箱格式错误' })
  @ApiProperty({ description: '邮箱' })
  email: string;
}
