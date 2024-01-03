import express, { json } from "express";
import morgan from "morgan";
import cors from 'cors'
import router from './src/route.js'
import config from './src/config/config.js'

const app = express();

app.use(json());
app.use(morgan("dev"));

app.use(cors());
app.options('*', cors());

app.use('/api', router)
app.listen(config.PORT, () => {
    console.log(+config.PORT, 'PORT server is listening.');
});