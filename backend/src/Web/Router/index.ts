import container from '../../InversionOfControl/Container';

import { notAuth } from '../Middlewares/notAuth';
import { isAuth } from '../Middlewares/isAuth';
import { AuthController } from '../Controllers/AuthController';

import AuthMiddleware from '../../Application/Middlewares/AuthMiddleware';
import DependencyTypes from '../../Common/DependencyTypes';
import { UserController } from '../Controllers/UserController';
import { ServerController } from '../Controllers/ServerController';

export default(app) => {
    // Controllers 
    const authController: AuthController = container.get(DependencyTypes.AuthController);
    const userController: UserController = container.get(DependencyTypes.UserController);
    const serverController: ServerController = container.get(DependencyTypes.ServerController)
    
    // Endpoints    
    app.get('/api/user', isAuth, userController.getUser);
    app.get('/api/auth/steam', notAuth, AuthMiddleware(), authController.login);
    app.get('/api/auth/steam/return', notAuth, AuthMiddleware(), authController.loginCallback);
    app.get('/api/server/dynamic', serverController.getDynamic)
    app.get('/api/server/players', serverController.getPlayers)
}