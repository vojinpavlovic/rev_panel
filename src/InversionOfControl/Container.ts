import { Container } from 'inversify';
import DependencyTypes from '../Common/DependencyTypes';

import { UserService } from '../Application/Services/UserService';
import { IUserService } from '../Domain/Interfaces/IUserService';
import { AuthController } from '../Web/Controllers/AuthController';

const container = new Container();

container.bind<IUserService>(DependencyTypes.IUserService).to(UserService)
container.bind<AuthController>(DependencyTypes.AuthController).to(AuthController);

export default container;