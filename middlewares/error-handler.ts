
import chalk from 'chalk';


const errorHandler = (err, req, res, next) => {
    console.log(chalk.red(`[error-handler] Error logged: ${req.method} ${req.url} : body => ${JSON.stringify(req.body || {})}, error => ${JSON.stringify(err)}, stack trace: ${console.trace()}`));
    
    if (res.headersSent)
        return;

    res.status(404).json({
        errors: [
            { message: err.message }
        ]
    });
};


export default errorHandler;
