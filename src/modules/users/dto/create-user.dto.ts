import { IsEmail, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsString()
  @MinLength(2)
  @ApiProperty({ description: '用户名' })
  name: string;

  @IsString()
  @MinLength(6)
  @ApiProperty({ description: '密码' })
  password: string;

  @IsString()
  @ApiProperty({ description: '头像' })
  avatar: string;

  @IsEmail({}, { message: '邮箱格式错误' })
  @ApiProperty({ description: '邮箱' })
  email: string;
}
