import UserEntity from "../Entities/UserEntity";

export interface IUserService {
    getPlayer(playerId: string): Promise<UserEntity | undefined>;
}