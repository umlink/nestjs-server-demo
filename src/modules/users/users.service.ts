import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '@/prisma.service';
import { Prisma } from '@prisma/client';
import { getIOSTime } from '@/tools/utils/time.utils';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async getUserByName(where: Prisma.UserWhereUniqueInput) {
    return this.prisma.user.findUnique({
      where,
      select: {
        id: true,
        email: true,
        name: true,
        password: true,
      },
    });
  }
  async getUserById(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        name: true,
      },
    });
  }
  async addUser(user: Prisma.UserCreateInput) {
    return this.prisma.user.create({
      data: user,
      select: {
        id: true,
        email: true,
        name: true,
      },
    });
  }
  async delUser(id: number) {
    return this.prisma.user.delete({ where: { id } }).catch((res) => {
      Logger.warn(`删除用户id:${id} [${res.meta.cause}]`);
    });
  }
  async updateUser(id: number, options: Prisma.UserUpdateInput) {
    this.prisma.user.update({
      where: { id },
      data: {
        ...options,
        updatedAt: getIOSTime(),
      },
    });
  }
}
