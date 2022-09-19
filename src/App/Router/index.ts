import { SteamOAuth } from '../../Infrastructure/Services/SteamOAuth';
import { AuthController } from '../Controllers/AuthController';
const steamOAuth = new SteamOAuth()

const authController: AuthController = new AuthController();

export default(app) => {
    app.get('/', (req, res) => {
        res.send(req.user);
    })

    app.get('/api/auth/steam', steamOAuth.authenticate(), function (req, res) {
        res.redirect('/')
    });
    
    app.get('/api/auth/steam/return', steamOAuth.authenticate(), function (req, res) {
        res.redirect('/')
    });
}