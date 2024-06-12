import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async getUserByName(where: Prisma.UserWhereUniqueInput) {
    return this.prisma.user.findUnique({ where });
  }
  async getUserById(id: number): Promise<any> {
    return this.prisma.user.findUnique({ where: { id } });
  }
  async addUser(user: Prisma.UserCreateInput) {
    return this.prisma.user.create({
      data: user,
    });
  }
}
