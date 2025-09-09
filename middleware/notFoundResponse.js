const logger = require("../utils/logger");


module.exports=(req, res, next) => {
    const message = `404 Not Found - ${req.path}`;
    logger.warn(message);
    res.status(404).json({
        success: false,
        message,
    });
}