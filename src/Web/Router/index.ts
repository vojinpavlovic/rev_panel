import { AuthController } from '../Controllers/AuthController';
import { isAuth } from '../Middlewares/isAuth';
import { notAuth } from '../Middlewares/notAuth';
const authController: AuthController = new AuthController();

// Leaking dependencies from infra -> web
import { SteamOAuth } from '../../Infrastructure/Services/SteamAuth';
const steamAuth = new SteamOAuth().authenticate


export default(app) => {
    app.get('/', isAuth, (req, res) => {
        res.send(req.user);
    })

    app.get('/api/auth/steam', notAuth, steamAuth(), authController.login);
    app.get('/api/auth/steam/return', notAuth, steamAuth(), authController.loginCb);
}