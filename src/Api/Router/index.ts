import { container } from '../../IoC/IoC';
import { AuthController } from '../Controllers/AuthController'

export const initRouter = app => {
    const authController = container.get<AuthController>('AuthController');

    app.get('/auth/login', authController.login);
    app.get('/auth/register', authController.register);
}