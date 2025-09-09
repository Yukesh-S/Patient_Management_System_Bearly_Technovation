const { createLogger, format, transports } = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');
const path = require('path');

// Define log levels
const logLevels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4,
};

// Define log format
const logFormat = format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.printf(({ timestamp, level, message }) => `[${timestamp}] ${level.toUpperCase()}: ${message}`)
);

// Configure transports
const logger = createLogger({
    levels: logLevels,
    format: logFormat,
    transports: [
        new transports.Console({ level: 'debug' }),

        // Daily file rotation for info and errors
        new DailyRotateFile({
            level: 'info',
            filename: path.join('logs', 'info', 'TCMSWeb-%DATE%.log'),
            datePattern: 'YYYY-MM-DD',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '14d',
        }),
        new DailyRotateFile({
            level: 'error',
            filename: path.join('logs', 'error', 'TCMSWeb-%DATE%.log'),
            datePattern: 'YYYY-MM-DD',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '14d',
        }),
    ],
});

module.exports = logger;
