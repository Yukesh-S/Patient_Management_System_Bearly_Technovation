"use strict";

const dotenv = require("dotenv");
const assert = require("assert");

dotenv.config();

const {
  PORT,
  HOST,
  HOST_URL,
  SQL_USER,
  SQL_PASSWORD,
  SQL_DATABASE_IND,
  SQL_DATABASE_UK,
  SQL_SERVER,
  API_KEY,
  IN_PATH,
  UK_PATH,
  COMMON_PATH
} = process.env;

const sqlEncrypt = process.env.SQL_ENCRYPT === "true";

assert(PORT, "PORT is require");
assert(HOST, "HOST is required");

module.exports = {
  port: PORT,
  host: HOST,
  url: HOST_URL,
  apiKey: API_KEY,
  inPath:IN_PATH,
  ukPath:UK_PATH,
  commonPath:COMMON_PATH,
  sql: {
    UK: {
      server: SQL_SERVER,
      database: SQL_DATABASE_UK,
      user: SQL_USER,
      password: SQL_PASSWORD,
      options: {
        encrypt: sqlEncrypt,
        enableArithAbort: true,
      },
      dbshortcode: "UK",
    },
    IN: {
      server: SQL_SERVER,
      database: SQL_DATABASE_IND,
      user: SQL_USER,
      password: SQL_PASSWORD,
      options: {
        encrypt: sqlEncrypt,
        enableArithAbort: true,
      },
      dbshortcode: "IN",
    },
  },
};
