
require('dotenv').config();

import chalk from 'chalk';
import app from '../app';
import env from '../utils/env';


const { SERVER_PORT } = env;
if (!SERVER_PORT) {
  console.log(chalk.red.bold(`[server] $SERVER_PORT env: ${SERVER_PORT}`));
  process.exit(1);
}

function startServer() {

    // returns http-server instance
    return app.listen(SERVER_PORT, function(err) {
        if (err) {
          return console.error(err);
        }
  
        console.log(chalk.green.bold(`[server] Listening at http://localhost:${SERVER_PORT}`));
    });
};


export default startServer();