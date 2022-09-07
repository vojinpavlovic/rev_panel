import { Container } from "inversify";
import { AuthController } from "../Api/Controllers/AuthController";
import { IAuthService } from "../Application/Interfaces/IAuthService";
import { AuthService } from "../Application/Services/AuthService";
import { IUserRepository } from "../Domain/Interfaces/Repositories/IUserRepository";
import { UserRepository } from "../Infrastructure/Repositories/UserRepository";

const container = new Container();

// Auth Service
container.bind<AuthController>("AuthController").to(AuthController);
container.bind<IAuthService>("IAuthService").to(AuthService);

container.bind<IUserRepository>("IUserRepository").to(UserRepository);


export { container };