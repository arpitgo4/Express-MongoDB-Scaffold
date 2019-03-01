
import mongoose from 'mongoose';
import chalk from 'chalk';

import env from '../utils/env';

const { MONGO_HOST, MONGO_DB_NAME, } = env;
if (!MONGO_HOST || !MONGO_DB_NAME) {
    console.log(chalk.red.bold(`[mongoose] Error in mongodb env configuration`));
    process.exit(1);
}

const DB_CONN_URL = `mongodb://${MONGO_HOST}/${MONGO_DB_NAME}`;

const CONN_CONF = {
    useMongoClient: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    bufferMaxEntries: 0
};

const connection = mongoose.connect(DB_CONN_URL, CONN_CONF, err => {
    console.log(DB_CONN_URL);
    if (err)
        console.log(chalk.red(`[mongoose] error connecting to mongodb: ${err.message}`)); // @ts-ignore
    else console.log(chalk.green('[mongoose] mongodb connected'));
});

mongoose.Promise = global.Promise;

module.exports = {
    connection
};