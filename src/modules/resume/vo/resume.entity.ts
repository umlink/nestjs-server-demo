import { Prisma } from '@prisma/client';

export class ResumeItemVO {
  id: number;
  title: string;
  content: Prisma.JsonValue;
  templateId: number;
  themeColor: string;
  createdAt: string;
  updatedAt: string;
}

export class ResumeListVO {
  list: ResumeItemVO[];
  total: number;
  pageNum: number;
  pageSize: number;
}
