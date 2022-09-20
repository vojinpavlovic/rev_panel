import { AuthController } from '../Controllers/AuthController';
import { isAuth } from '../Middlewares/isAuth';
import { notAuth } from '../Middlewares/notAuth';
const authController: AuthController = new AuthController();

import AuthMiddleware from '../../Application/Middlewares/AuthMiddleware';


export default(app) => {
    app.get('/', isAuth, (req, res) => {
        res.send(req.user);
    })

    app.get('/api/auth/steam', notAuth, AuthMiddleware(), authController.login);
    app.get('/api/auth/steam/return', notAuth, AuthMiddleware(), authController.loginCb);
}