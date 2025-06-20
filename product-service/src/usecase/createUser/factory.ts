import { IUserRepository } from "../../domain/interfaces/IUserRepository";
import { CreateUserDTO } from "../../domain/dto/createUserDTO";
import { userEntityFactory } from "../../domain/entities/userEntity";

export const createUserUsecaseFactory = ({ userRepository }: { userRepository: IUserRepository }) => {
  return async function createUserUsecase({ body }: { body: CreateUserDTO }) {
    const makeUser = userEntityFactory();
    const user = makeUser(body);

    return userRepository.create({
      name: user.getName(),
      email: user.getEmail(),
    });
  };
};
