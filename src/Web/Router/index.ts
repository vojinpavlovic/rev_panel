import container from '../../InversionOfControl/Container';

import { notAuth } from '../Middlewares/notAuth';
import { isAuth } from '../Middlewares/isAuth';
import { AuthController } from '../Controllers/AuthController';

import AuthMiddleware from '../../Application/Middlewares/AuthMiddleware';
import DependencyTypes from '../../Common/DependencyTypes';


export default(app) => {
    // Controllers 
    const authController: AuthController = container.get(DependencyTypes.AuthController);

    app.get('/', authController.test);

    // Endpoints    
    app.get('/api/auth/steam', notAuth, AuthMiddleware(), authController.login);
    app.get('/api/auth/steam/return', notAuth, AuthMiddleware(), authController.loginCallback);
}