import { Prisma } from '@prisma/client';
import { IsInt, IsObject, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateResumeDto {
  @IsString()
  @ApiProperty()
  title: string;

  @IsObject()
  @ApiProperty()
  content: Prisma.InputJsonValue;

  @IsInt()
  @ApiProperty()
  templateId: number;

  @IsString()
  @ApiProperty()
  themeColor: string;
}
