import { container } from '../../IoC/IoC';
import { AuthController } from '../Controllers/AuthController'

export const initRouter = app => {
    const authController = container.get<AuthController>('AuthController');

    app.post('/auth/login', authController.login);
    app.post('/auth/register', authController.register);
}