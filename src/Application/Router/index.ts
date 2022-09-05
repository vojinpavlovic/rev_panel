import { AuthController } from '../Controllers/AuthController'

export const initRouter = app => {
    const authController = new AuthController();

    app.get('/auth/login', authController.login);
    app.get('/auth/register', authController.register);
}