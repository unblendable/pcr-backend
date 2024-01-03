import mssql from 'mssql';
import config from './config.js'

const sqlConfig = {
    user: config.DB_USERNAME,
    password: config.DB_PASSWORD,
    database: config.DB_NAME,
    server: config.DB_HOST,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: false, // for azure
        trustServerCertificate: true // change to true for local dev / self-signed certs
    }
}

try {
    var pool = new mssql.ConnectionPool(sqlConfig)
} catch (err) {
    console.error('Error creating connection pool', err)
}

const db = await pool.connect()

export default db