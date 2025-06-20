import { CreateUserDTO } from "../dto/createUserDTO";

export interface IUserRepository {
  create: (data: CreateUserDTO) => Promise<any>;
  findById: (id: string) => Promise<any | null>; // New method
}
