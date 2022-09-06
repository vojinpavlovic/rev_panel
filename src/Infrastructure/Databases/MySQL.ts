import { createPool, MysqlError, Pool } from 'mysql';

let pool: Pool

export const init = () => {
    try {
        pool = createPool({
            connectionLimit: 100,
            host: '162.19.139.137',
            user: 'u32652_X7bfuysnqR',
            port: 3306,
            password: 'pjX5d18wj8AI40QTdRo41Kmd',
            database: 's32652_baza'
        });

        console.log(['MySQL has successfully initialized'])
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