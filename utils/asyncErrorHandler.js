const { sql } = require("../config");

module.exports = (func) => {
  return (req, res, next) => {
    const country=req.headers.country || 'IN' 
    Promise.resolve(func(req, res,sql[country],next)).catch((err) => next(err));
  };
};
