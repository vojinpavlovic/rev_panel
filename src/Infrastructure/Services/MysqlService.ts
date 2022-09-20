import { Pool, createPool, MysqlError } from 'mysql'
import { IMysqlService } from '../../Domain/Interfaces/IMysqlService'

let pool: Pool

export default class MysqlService implements IMysqlService{
    private checkConn = () => {
        if (!pool) {
            return new Error('Pool is not initialised, init pool first')
        }
    
        const errOut = {
            PROTOCOL_CONNECTION_LOST: 'Database connection lost',
            ER_CON_COUNT_ERROR: 'Database has too many connections',
            ECONNREFUSED: 'Database Connection has been refused',
            ENOTFOUND: 'Database connection not found',
            ER_NO_DB_ERROR: 'No database is found',
            ER_ACCESS_DENIED_ERROR: 'DB Credentials are not allowed',
        }

        pool.getConnection((err, connection) => {
            if (!err) {
                console.log(['📁 MySQL connection has successfully been established'])
                return connection.release()
            }
      
            if (errOut[err.code]) {
                const errMsg: string = errOut[err.code]
                console.error(errMsg)
                return process.exit(1)
            }
      
            console.error(err)
            return process.exit(1)
        })
    }

    public setup = () => {
        if (pool) {
            return pool;
        }
    
        try {
            pool = createPool({
                connectionLimit: 20,
                host: '162.19.139.137',
                port: 3306,
                user: 'u32652_X7bfuysnqR',
                password: 'pjX5d18wj8AI40QTdRo41Kmd',
                database: 's32652_baza',
            })
    
            this.checkConn()
        } catch (err) {
            throw new Error(`Failed to initialise MySQL Pool ${err}`)
        }
    }
    
    async execute<T>(query: string, params: string[]): Promise<T> {
        try {
            if (!pool) {
                throw new Error(
                    'Pool is not initialized. Ensure pool is initialized first'
                )
            }
    
            return new Promise<T>((resolve, reject) => {
                pool.query(query, params, (error: MysqlError | null, result: any) => {
                    if (error) {
                        return reject(error)
                    }
    
                    resolve(result)
                })
            })
            .then(res => res)
            .catch(err => {
              return err
            })
        } catch (err) {
            throw new Error(`Failed to execute MySQL query ${err}`)
        }
      }
}