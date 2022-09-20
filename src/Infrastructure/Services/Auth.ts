import passport, { PassportStatic } from 'passport';
import { Strategy } from 'passport-steam';
import { steamAuthConfig } from '../Configuration/Auth';

export class Auth {
    private _passport: PassportStatic = passport;

    public setup = (): PassportStatic => {
        if (!this._passport) {
            return passport;
        }

        const SteamStrategy = Strategy;

        this._passport.serializeUser((user, done) => {
            done(null, user);
        });
           
        this._passport.deserializeUser((user: any, done) => {
            done(null, user);
        });

        const strategy = new SteamStrategy(steamAuthConfig, (identifier, profile, done) => {
            process.nextTick(() => {
                profile.identifier = identifier;
                return done(null, profile);
            })
        })

        this._passport.use(strategy)

        return this._passport
    }

    public authenticate = (): ReturnType<typeof this._passport.authenticate> => {
        return this._passport.authenticate("steam")
    }
}

export default new Auth();
