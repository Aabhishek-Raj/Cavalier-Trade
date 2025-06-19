import { Pool } from "pg";
import { User } from "../../../domain/entities/User";
import { IUserRepository } from "../../../domain/interfaces/IUserRepository";
import { pgClient } from "./pgClient";
import { CreateUserDTO } from "../../../domain/dto/userDto";

export class UserRepository implements IUserRepository {

    private client: Pool

    constructor() {
        this.client = pgClient()
    }

    async create({ name, email }: CreateUserDTO): Promise<User> {
        const product = await this.client.query(
      `INSERT INTO products (name,description,price,stock) VALUES ($1,$2,$3,$4) RETURNING *`,
      [name, email]
    );
    return product.rows[0];
    }
}