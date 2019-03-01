
import chalk from 'chalk';
import { IEnv } from 'Interfaces';

const environment_dependencies = [
    'JWT_SECRET',
    'JWT_HEADER',
    'SERVER_PORT',
    'MONGO_HOST',
    'MONGO_DB_NAME',
    'REDIS_HOST',
    'JWT_TOKEN_TTL',
];

let all_env_vars_passed = true;
console.log(chalk.red.bold(`\n########################### Environment Variables ###########################`));
// @ts-ignore
const env: IEnv = environment_dependencies.reduce((acc, key) => {
    let value = process.env[key];

    if (!value) {
        all_env_vars_passed = false;
        value = '<not specified>';
    }

    console.log(chalk.red.bold(`${key}: ${value}`));

    acc[key] = value;

    return acc;
}, {});
console.log(chalk.red.bold(`#############################################################################\n`));

if (!all_env_vars_passed) {
    console.log(chalk.red.bold(`[env] Error in Environment Variables`));
    process.exit(1);
}


export default env;
