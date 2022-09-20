import { injectable } from "inversify";
import { createClient } from "redis";
import connectRedis from 'connect-redis';

@injectable()
class RedisService {
    private _client;

    setup = (): ReturnType<typeof this._client>=> {
        if (this._client) {
            return this._client;
        }

        this._client = createClient({
            url: 'redis://localhost:6379',
            legacyMode: true,
        });

        this._client.connect();

        this._client.on('error', err => {
            console.error(`⚠ Redis Service could not connect to server: ${err.message} ⚠`);
            process.exit(1);
        })

        this._client.on('ready', () => console.log(['🗃  Redis connection established']))

        return this._client;
    }

    get = (key: string) => {
        const getRes = new Promise((resolve, reject) => {
            this._client.get(key, (err, reply) => {
                if (err) return reject(err)
    
                return resolve(reply)
            })
        })
    
        return getRes
            .then(res => res)
            .catch(err => {
                throw err
            });
    }

    set<T>(key: string, value: T) {
        const setRes = new Promise<T>((resolve, reject) => {
            this._client.set(key, value, (err, reply) => {
                if (err) return reject(err)
    
                return resolve(reply)
            })
        })
    
        return setRes
            .then(res => res)
            .catch(err => {
                throw err
            })
    }

    del = async (key: string) => await this._client.del(key); 

    flushAll = async () => await this._client.flushAll();

    getStore = (obj): connectRedis.RedisStore => {
        const store = connectRedis(obj)
        return new store({ client: this._client })
    }
}

export default new RedisService();