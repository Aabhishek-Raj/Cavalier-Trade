import { prisma } from "../../infrastructure/db/prisma/client";
import { userRepository } from "../../infrastructure/db/prisma/userRepository";
import { createUserUsecaseFactory } from "./factory";

export const createUserUsecase = createUserUsecaseFactory({
  userRepository: userRepository(prisma),
});
