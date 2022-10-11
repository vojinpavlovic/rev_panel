import { RedisStore } from "connect-redis";

export interface IRedisService {
    setup();
    get(key: string): Promise<string | unknown>;
    set<T>(key: string, value: T);
    del(key: string): Promise<string>;
    flushAll(): Promise<string>;
    getStore(obj: any): RedisStore
}