import { Prisma } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class ResumeItemVO {
  @ApiProperty()
  id: number;
  @ApiProperty()
  title: string;
  @ApiProperty()
  content: Prisma.JsonValue;
  @ApiProperty()
  templateCode: string;
  @ApiProperty()
  themeColor: string;
  @ApiProperty()
  createdAt: string;
  @ApiProperty()
  updatedAt: string;
}

export class ResumeListVO {
  @ApiProperty()
  list: ResumeItemVO[];
  @ApiProperty()
  total: number;
  @ApiProperty()
  pageNum: number;
  @ApiProperty()
  pageSize: number;
}
