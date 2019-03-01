
import chalk from 'chalk';
import jwt from 'express-jwt';
import { Request } from 'express';

import env from '../utils/env';

const { JWT_SECRET, JWT_HEADER, } = env;

if (!JWT_SECRET || !JWT_HEADER) {
    console.log(chalk.red.bold(`[jwt-handler] JWT Secret or JWT Header config error`));
    process.exit(1);
}


const middleware = jwt({
    secret: JWT_SECRET,
    credentialsRequired: true,
    getToken: (req: Request) => {
        if (req.headers[JWT_HEADER])
            return req.headers[JWT_HEADER];
        else return undefined;
    }
});


export default middleware;