import { IUserRepository } from "../../domain/interfaces/IUserRepository";

export const findUserUsecaseFactory = ({ userRepository }: { userRepository: IUserRepository }) => {
  return async function findUserUsecase({ id }: { id: string }) {
    if (!id) throw new Error("User ID is required");

    const user = await userRepository.findById(id);
    if (!user) {
      throw new Error("User not found");
    }

    return user;
  };
};
