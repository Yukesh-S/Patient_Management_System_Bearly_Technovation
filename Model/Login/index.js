const sql = require("mssql");
const { loadSqlQuery } = require("../Utill");


const Loginuser = async (dbConfig, data) => {
    try {
        const connection = new sql.ConnectionPool(dbConfig);
        const pool = await connection.connect();
        const sqlQueries = await loadSqlQuery('Login/LoginUser');
        const LoginUser = await pool.request()
            .input('User_Code', sql.VarChar(50), data.User_Code)
            .input('Password', sql.VarChar(100), data.Password)
            .query(sqlQueries);        
        if (LoginUser.recordset.length > 0) {
            return LoginUser.recordset;
        } else {
            return { error: 'Invalid username or password' };
        }
    } catch (error) {        
         console.error('Database error:', error.message);
        return { error: 'Something went wrong during login' };
    }
}

module.exports = {
  Loginuser:Loginuser
};
