export interface IUserService {
    findUser(userId: string): Promise<void>;
}