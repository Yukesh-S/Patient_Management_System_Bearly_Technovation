const { apiKey } = require("../../config");
const asyncErrorHandler = require("../../utils/asyncErrorHandler");
const model = require("../../Model/Login");
const JWT = require("jsonwebtoken");


const Loginuser = asyncErrorHandler(async (req, res, dbConfig) => {
  const data = await model.Loginuser(dbConfig, req.body);
  res.status(200).json(data).end();
});

module.exports = {
  Loginuser:Loginuser
};
