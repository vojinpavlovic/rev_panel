import { injectable } from "inversify";
import { createClient } from "redis";
import connectRedis from 'connect-redis';

import { IRedisService } from "../../Domain/Interfaces/IRedisService";

var client;

@injectable()
class RedisService implements IRedisService {

    setup = (): ReturnType<typeof client> => {
        if (client) {
            return client;
        }

        client = createClient({
            url: `redis://${process.env.REDIS_HOST ?? "localhost"}:${parseInt(<string>process.env.REDIS_PORT ?? 6379)}`,
            legacyMode: true,
        });

        client.connect();

        client.on('error', err => {
            console.error(`⚠ Redis Service could not connect to server: ${err.message} ⚠`);
            process.exit(1);
        })

        client.on('ready', () => console.log(['🗃  Redis connection established']))

        return client;
    }

    get = async (key: string): Promise<string | unknown> => {
        const getRes = new Promise((resolve, reject) => {
            client.get(key, (err, reply) => {
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

    set = async <T>(key: string, value: T): Promise<string | unknown> => {
        const setRes = new Promise<T>((resolve, reject) => {
            client.set(key, value, (err, reply) => {
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

    del = async (key: string): Promise<string> => await client.del(key); 

    flushAll = async (): Promise<string> => await client.flushAll();

    getStore = (obj): connectRedis.RedisStore => {
        const store = connectRedis(obj)
        return new store({ client: client })
    }
}

export default RedisService;