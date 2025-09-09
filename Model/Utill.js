'use strict';
const fspromise = require('fs/promises');
const { join } = require('path');
const config = require('../config');
const sql = require('mssql')

const loadSqlQuery = async (path) => {
    const query = await fspromise.readFile(join(__dirname, path + '.sql'))
    return query.toString();
}

const saveHistory = async (UserId = '1', Form_Id, Transaction_Type, Transaction_Comments, TrackChanges = '', Reason = '') => {
    
    const pool = await sql.connect(config.sql);
    await pool.request()
        .input('UserId', sql.Int, UserId)
        .input('Form_Id', sql.Int, Form_Id)
        .input('Transaction_Type', sql.Int, Transaction_Type)
        .input('Transaction_Comments', sql.VarChar(100), Transaction_Comments)
        .input('TrackChanges', sql.VarChar(200), TrackChanges)
        .input('Reason', sql.VarChar(100), Reason)
        .execute('SaveHistory')
}

module.exports = {
    loadSqlQuery,
    saveHistory
}