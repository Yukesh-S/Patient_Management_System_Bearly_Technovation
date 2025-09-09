const logger = require("../utils/logger");
const sql = require('mssql')

// module.exports=(err, req, res, next) => {
//     const status = err.status || 500;
//     const message = err.message || 'Internal Server Error';
//     logger.error(`Error: ${message}, Status: ${status}, Stack: ${err.stack}`);
//     res.status(status).send(message);
// }

module.exports = (err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || 'Internal Server Error';

    if (err instanceof sql.RequestError) {
        logger.error(`SQL Query Error: ${err.message}`);
        res.status(500).send(`SQL Query Error: ${err.message}`);
    } else {
        logger.error(`Error: ${message}, Status: ${status}, Stack: ${err.stack}`);
        res.status(status).send(message);
    }
};
