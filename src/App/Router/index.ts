import { SteamOAuth } from '../../Infrastructure/Services/SteamOAuth';
import { AuthController } from '../Controllers/AuthController';
import { isAuth } from '../Middlewares/isAuth';
import { notAuth } from '../Middlewares/notAuth';

const steamAuth = new SteamOAuth().authenticate

const authController: AuthController = new AuthController();

export default(app) => {
    app.get('/', isAuth, (req, res) => {
        res.send(req.user);
    })

    app.get('/api/auth/steam', notAuth, steamAuth(), authController.login);
    app.get('/api/auth/steam/return', notAuth, steamAuth(), authController.loginCb);
}