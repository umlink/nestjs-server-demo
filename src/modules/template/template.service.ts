import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/modules/prisma/prisma.service';
import { TemplateQuery } from '@/modules/template/dto/query-template.dto';

@Injectable()
export class TemplateService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(query: TemplateQuery) {
    const where = {
      isVip: query.isVip,
      keywords: { array_contains: query.keywords },
    };

    return await Promise.all([
      this.prisma.resumeTemplate.findMany({
        skip: (query.pageNum - 1) * query.pageSize,
        take: query.pageSize,
        orderBy: { id: 'asc' },
        where,
      }),
      this.prisma.resumeTemplate.count({ where }),
    ]).then((list) => {
      return {
        list: list[0],
        total: list[1],
        pageNum: query.pageNum,
        pageSize: query.pageSize,
      };
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} template`;
  }
}
