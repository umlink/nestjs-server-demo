import { Inject, Injectable } from '@nestjs/common';
import { CreateResumeDto } from './dto/create-resume.dto';
import { UpdateResumeDto } from './dto/update-resume.dto';
import { PrismaService } from '@/modules/prisma/prisma.service';
import { genSnowUUId } from '@/utils/id.gen';

@Injectable()
export class ResumeService {
  @Inject(PrismaService)
  private readonly prisma: PrismaService;

  create(createResumeDto: CreateResumeDto, userId: number) {
    return this.prisma.resume.create({
      data: {
        id: genSnowUUId(),
        userId,
        ...createResumeDto,
      },
      select: { id: true },
    });
  }

  async findAll(query: { id: number; pageSize: number; pageNum: number }) {
    const where = { id: query.id };
    return await Promise.all([
      this.prisma.resume.findMany({
        skip: (query.pageNum - 1) * query.pageSize,
        take: query.pageSize,
        where,
      }),
      this.prisma.resume.count({ where }),
    ]).then((list) => {
      return {
        list: list[0],
        total: list[1],
        pageNum: query.pageNum,
        pageSize: query.pageSize,
      };
    });
  }

  findOne(id: number, userId: number) {
    return this.prisma.resume.findUnique({ where: { id, userId } });
  }

  update(userId: number, updateResumeDto: UpdateResumeDto) {
    return this.prisma.resume.update({
      data: updateResumeDto,
      where: {
        id: updateResumeDto.id,
        userId,
      },
    });
  }

  remove(id: number, userId: number) {
    return this.prisma.resume.delete({
      where: {
        id,
        userId,
      },
    });
  }
}
