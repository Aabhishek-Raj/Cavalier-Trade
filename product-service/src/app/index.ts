import { createUserUsecase } from "../usecases/createUser";
import { findUserUsecase } from "../usecases/findUser";
import { userControllerFactory } from "../presentation/controllers/userControllerFactory";

const controllers = userControllerFactory({
  createUserUsecase,
  findUserUsecase,
});

export const createUserController = controllers.createUserController;
export const findUserController = controllers.findUserController;
