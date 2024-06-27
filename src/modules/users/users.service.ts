import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '@/modules/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { getIOSTime } from '@/utils/time-utils';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async getUserByEmail(where: Prisma.UserWhereInput) {
    return this.prisma.user.findFirst({
      where,
      select: {
        id: true,
        username: true,
        avatar: true,
        email: true,
        roles: true,
      },
    });
  }
  async getUserById(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        username: true,
        avatar: true,
        email: true,
        roles: true,
        hobby: true,
        profession: true,
      },
    });
  }
  async register(user: Prisma.UserCreateInput) {
    const res = await this.prisma.user.create({
      data: user,
      select: {
        id: true,
      },
    });
    return res?.id;
  }
  async registerByEmail(user: Prisma.UserCreateInput) {
    return this.prisma.user.create({
      data: user,
      select: {
        id: true,
        username: true,
        avatar: true,
        email: true,
        roles: true,
      },
    });
  }
  async addUser(user: Prisma.UserCreateInput) {
    return this.prisma.user.create({
      data: user,
      select: {
        id: true,
        email: true,
        username: true,
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
