import { CreateUserDTO, UserResponseDTO } from "../dto/userDto";

export interface IUserInteractor {
    createUser(input: CreateUserDTO): Promise<UserResponseDTO>
}