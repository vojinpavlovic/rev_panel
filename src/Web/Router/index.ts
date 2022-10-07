import container from '../../InversionOfControl/Container';

import { notAuth } from '../Middlewares/notAuth';
import { isAuth } from '../Middlewares/isAuth';
import { AuthController } from '../Controllers/AuthController';

import AuthMiddleware from '../../Application/Middlewares/AuthMiddleware';
import DependencyTypes from '../../Common/DependencyTypes';
import { UserController } from '../Controllers/UserController';


export default(app) => {
    // Controllers 
    const authController: AuthController = container.get(DependencyTypes.AuthController);
    const userController: UserController = container.get(DependencyTypes.UserController);

    
    // Endpoints    
    app.get('/api/user', isAuth, userController.getUser);
    app.get('/api/auth/steam', notAuth, AuthMiddleware(), authController.login);
    app.get('/api/auth/steam/return', notAuth, AuthMiddleware(), authController.loginCallback);
}