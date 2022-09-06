import { injectable } from "inversify";
import { IAuthService } from "../Interfaces/IAuthService";

@injectable()
export class AuthService implements IAuthService {
    public authenticateUser() {
        throw new Error("Not implemented");
    }

    public createNewUser() {
        throw new Error("Not implemented");
    }
}