export interface IUserRepository {
    findUser(id: string);
    deleteUser(id: string);
}