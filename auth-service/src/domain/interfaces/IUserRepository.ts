import { CreateUserDTO } from "../dto/userDto";
import { User } from "../entities/User";

export interface IUserRepository {
    create(data: CreateUserDTO): Promise<User>
}