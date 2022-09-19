import passport from 'passport';
import { Strategy } from 'passport-steam';
import { steamOAuthConfig } from './config/SteamOAuth';

const strategyOptions = steamOAuthConfig;

export class SteamOAuth {
    setup() {
        const SteamStrategy = Strategy;

        passport.serializeUser((user, done) => {
            done(null, user);
        });
           
        passport.deserializeUser((user: any, done: (arg0: null, arg1: any) => void) => {
            done(null, user);
        });

        const strategy: Strategy = new SteamStrategy(strategyOptions, (identifier, profile, done) => {
            process.nextTick(() => {
                profile.identifier = identifier;
                return done(null, profile);
            })
        })

        passport.use(strategy)

        return passport
    }

    authenticate() {
        return passport.authenticate("steam")
    }
}