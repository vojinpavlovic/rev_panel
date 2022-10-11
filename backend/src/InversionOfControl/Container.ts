import { Container } from 'inversify';
import DependencyTypes from '../Common/DependencyTypes';

import { UserService } from '../Application/Services/UserService';
import { IUserService } from '../Domain/Interfaces/IUserService';

import { AuthController } from '../Web/Controllers/AuthController';

import { IRedisService } from '../Domain/Interfaces/IRedisService';
import RedisService from '../Infrastructure/Services/RedisService';

import { IMysqlService } from '../Domain/Interfaces/IMysqlService';
import MysqlService from '../Infrastructure/Services/MysqlService';

import IUserRepository from '../Domain/Interfaces/IUserRepository';
import UserRepository from '../Infrastructure/Repositories/UserRepository';

import { UserController } from '../Web/Controllers/UserController';

const container = new Container();

container.bind<AuthController>(DependencyTypes.AuthController).to(AuthController);
container.bind<UserController>(DependencyTypes.UserController).to(UserController);

container.bind<IUserService>(DependencyTypes.IUserService).to(UserService)
container.bind<IRedisService>(DependencyTypes.IRedisService).to(RedisService);
container.bind<IMysqlService>(DependencyTypes.IMysqlService).to(MysqlService);
container.bind<IUserRepository>(DependencyTypes.IUserRepository).to(UserRepository)

export default container;