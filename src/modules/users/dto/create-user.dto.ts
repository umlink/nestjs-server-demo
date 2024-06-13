import { IsEmail, IsString, Length, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsString()
  @Length(2, 10)
  name: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsString()
  avatar: string;

  @IsEmail({}, { message: '邮箱格式错误' })
  @ApiProperty({ description: '邮箱' })
  email: string;
}
