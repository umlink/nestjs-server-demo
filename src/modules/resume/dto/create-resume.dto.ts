import { Prisma } from '@prisma/client';
import { IsInt, IsObject, IsString } from 'class-validator';

export class CreateResumeDto {
  @IsString()
  title: string;

  @IsObject()
  content: Prisma.InputJsonValue;

  @IsInt()
  templateId: number;

  @IsString()
  themeColor: string;
}
