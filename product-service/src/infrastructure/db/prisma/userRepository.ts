import { PrismaClient } from "@prisma/client";
import { IUserRepository } from "../../../domain/interfaces/IUserRepository";
import { CreateUserDTO } from "../../../domain/dto/createUserDTO";

export const userRepository = (prisma: PrismaClient): IUserRepository => ({
  async create(data: CreateUserDTO) {
    return prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
      },
    });
  },

  async findById(id: string) {
    return prisma.user.findUnique({
      where: { id },
    });
  },
});
