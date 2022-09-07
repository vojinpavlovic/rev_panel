import { config } from 'dotenv';
import { createPool, MysqlError, Pool } from 'mysql';

var pool: Pool

const init = () => {
    try {
        pool = createPool({
            connectionLimit: parseInt(<string>process.env.MYSQL_CONN_LIMIT) ?? 20,
            host: process.env.MYSQL_HOST ?? "localhost",
            port: parseInt(<string>process.env.MYSQL_PORT) ?? 3306,
            user: process.env.MYSQL_USER ?? "root",
            password: process.env.MYSQL_PASSWD ?? "",
            database: process.env.MYSQL_DB_NAME ?? "rev_panel",
        });

        checkConnection();
    } catch(error) {
        throw new Error(`Failed to initialize pool ${error}`)
    }
}

const getConnection = () => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                connection.release();
                return reject(err);
            }

            resolve(connection);
        });
    });
}

const checkConnection = async () => {
    const errOut = {
        "PROTOCOL_CONNECTION_LOST": "Database connection lost",
        "ER_CON_COUNT_ERROR": "Database has too many connections",
        "ECONNREFUSED": "Database Connection has been refused",
        "ENOTFOUND": "Database connection not found",
        "ER_NO_DB_ERROR": "No database is found",
        "ER_ACCESS_DENIED_ERROR": "DB Credentials are not allowed"
    }

    pool.getConnection((err, connection) => {
        if (!err) {
            console.log(["Connection with MySQL has been established"])
            return connection.release();
        }

        if (errOut[err.code]) {
            let errMsg = errOut[err.code];
            console.error(errMsg);
            return process.exit(1);
        }

        console.error(err);
        return process.exit(1);
    });
}


const execute = <T>(query: string, params: string[]) : Promise<T> | null => {
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


export { execute, init }
