import UserEntity from "../Entities/UserEntity";

export default interface IUserRepository {
    findAll(): Promise<UserEntity[]>;
    findById(id: string): Promise<UserEntity | undefined>;
}