import { prisma } from "../../infrastructure/db/prisma/client";
import { userRepository } from "../../infrastructure/db/prisma/userRepository";
import { findUserUsecaseFactory } from "./factory";

export const findUserUsecase = findUserUsecaseFactory({
  userRepository: userRepository(prisma),
});
