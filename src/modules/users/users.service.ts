import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
      roles: ['USER'],
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
      roles: ['ADMIN'],
    },
  ];

  async getUserByName(where: Prisma.UserWhereUniqueInput) {
    return this.prisma.user.findUnique({ where });
  }

  async findOne(username: string): Promise<any> {
    return this.users.find((user) => user.username === username);
  }
}
