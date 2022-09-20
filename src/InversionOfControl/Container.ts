import { Container } from 'inversify';
import DependencyTypes from '../Common/DependencyTypes';

import { UserService } from '../Application/Services/UserService';
import { IUserService } from '../Domain/Interfaces/IUserService';

import { AuthController } from '../Web/Controllers/AuthController';

import { IRedisService } from '../Domain/Interfaces/IRedisService';
import RedisService from '../Infrastructure/Services/RedisService';

import { IMysqlService } from '../Domain/Interfaces/IMysqlService';
import MysqlService from '../Infrastructure/Services/MysqlService';

const container = new Container();

container.bind<IUserService>(DependencyTypes.IUserService).to(UserService)
container.bind<AuthController>(DependencyTypes.AuthController).to(AuthController);
container.bind<IRedisService>(DependencyTypes.IRedisService).to(RedisService);
container.bind<IMysqlService>(DependencyTypes.IMysqlService).to(MysqlService);

export default container;