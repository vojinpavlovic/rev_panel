import { PoolConfig } from "mysql"

const config: PoolConfig = {
    connectionLimit: parseInt(<string>process.env.MYSQL_CONN_LIMIT ?? 20),
    host: process.env.MYSQL_HOST ?? 'localhost',
    port: parseInt(<string>process.env.MYSQL_PORT ?? 3306),
    user: process.env.MYSQL_USER ?? 'root',
    password: process.env.MYSQL_PASSWD ?? '',
    database: process.env.MYSQL_DB ?? 'rev_panel',
}

export default config;