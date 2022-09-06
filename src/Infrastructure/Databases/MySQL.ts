import { createPool, MysqlError, Pool } from 'mysql';

let pool: Pool

export const init = () => {
    try {
        pool = createPool({
            connectionLimit: 100 || 100,
            host: 'localhost' || 'localhost',
            user: 'root' || 'root',
            password: 'password' || 'password',
            database: 'revolucija' || 'revolucija'
        });
    } catch(error) {
        throw new Error(`Failed to initialize pool ${error}`)
    }
}

export const execute = <T>(query: string, params: string[]) : Promise<T> | null => {
    try {
        if (!pool) {
            throw new Error("Pool is not initialized. Ensure pool is initialized first");
        };

        return new Promise<T>((resolve, reject) => {
            pool.query(query, params, (error: MysqlError | null, result: any) => {
                if (error) {
                    return reject(error);
                }

                resolve(result);
            })
        })
        .then(res => res)
        .catch(err => {
            return err;
        });
        
    } catch (error) {
        throw new Error(`Failed to execute MySQL query ${error}`);
    }
}