import { injectable } from "inversify";
import { IUserService } from "../../Domain/Interfaces/IUserService";

@injectable()
export class UserService implements IUserService {
    findUser(userId: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}