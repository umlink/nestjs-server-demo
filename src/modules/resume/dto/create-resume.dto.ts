import { Prisma } from '@prisma/client';

export class CreateResumeDto {
  title: string;
  content: Prisma.JsonValue;
  templateId: number;
  themeColor: string;
}
