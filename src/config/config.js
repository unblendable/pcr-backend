import { } from 'dotenv/config';

export default {
    PORT: process.env.PORT || 3001,
    BODY_LIMIT: '100kb',
    DB_HOST: process.env.DB_HOST,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME
}
