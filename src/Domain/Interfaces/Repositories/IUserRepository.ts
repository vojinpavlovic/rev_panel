import { UserEntity } from "../../Entities/UserEntity";

export interface IUserRepository {
    findUser(id: string): Promise<UserEntity>;
    deleteUser(id: string): Boolean;
}