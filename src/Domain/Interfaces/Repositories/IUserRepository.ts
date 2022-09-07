import { UserEntity } from "../../Entities/UserEntity";

export interface IUserRepository {
    findUser(id: string): void;
    deleteUser(id: string): void;
}