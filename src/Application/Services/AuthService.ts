import { inject, injectable } from "inversify";
import { IUserRepository } from "../../Domain/Interfaces/Repositories/IUserRepository";
import { IAuthService } from "../Interfaces/IAuthService";

@injectable()
export class AuthService implements IAuthService {
    private readonly userRepository: IUserRepository;

    constructor(
        @inject("IUserRepository") userRepository : IUserRepository
    ) {
        this.userRepository = userRepository;
    }

    public authenticateUser = async() => {

    }

    public createNewUser() {
        throw new Error("Not implemented");
    }
}