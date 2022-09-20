import { inject, injectable } from "inversify";
import { IUserService } from "../../Domain/Interfaces/IUserService";
import DependencyTypes from "../../Common/DependencyTypes";
import IUserRepository from "../../Domain/Interfaces/IUserRepository";
import UserEntity from "../../Domain/Entities/UserEntity";

@injectable()
export class UserService implements IUserService {
    private _userRepository: IUserRepository;

    constructor(
        @inject(DependencyTypes.IUserRepository) userRepository: IUserRepository
    ) {
        this._userRepository = userRepository
    }
    
    async getPlayer(playerId: string): Promise<UserEntity | undefined> {
        return await this._userRepository.findById(playerId);
    }
}

