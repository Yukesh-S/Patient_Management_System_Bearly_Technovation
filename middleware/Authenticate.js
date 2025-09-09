const JWT = require("jsonwebtoken");
const { apiKey } = require("../config");
const logger = require("../utils/logger");

function Authenticate(req, res, next) {
  try {
    logger.info(`Authenticating request to ${req.path}`);
    if (req.path.toLowerCase().includes('/api/signup') || req.path.toLowerCase().includes('/api/login')) {
      logger.debug("Skipping authentication for public endpoint");
      return next();
    }
    const token = req.headers.authtoken;
    if (!token) {
      logger.warn("Unauthorized access attempt without token");
      return res.status(401).json('Unauthorized: No token provided');
    }
    JWT.verify(token, apiKey);
    next();
  } catch (error) {
    logger.error(`Authentication failed: ${error.message}`);
    return res.status(403).json("Invalid or expired token");
  }
}

module.exports = Authenticate;
