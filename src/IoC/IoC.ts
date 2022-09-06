import { Container } from "inversify";
import { AuthController } from "../Api/Controllers/AuthController";
import { IAuthService } from "../Application/Interfaces/IAuthService";
import { AuthService } from "../Application/Services/AuthService";

const container = new Container();

// Auth Service
container.bind<AuthController>("AuthController").to(AuthController);
container.bind<IAuthService>("IAuthService").to(AuthService);


export { container };