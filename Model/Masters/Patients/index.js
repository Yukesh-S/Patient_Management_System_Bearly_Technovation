const sql = require("mssql");
const { loadSqlQuery } = require("../../Utill");

const SavePatient = async (dbConfig, datas) => {
    console.log(datas, 'datas');
    let pool;
    
    try {
        pool = await new sql.ConnectionPool(dbConfig).connect();
        const query = await loadSqlQuery("Masters/Patients/SavePatient"); 

        const request = pool.request()
            .input("Patient_ID", sql.BigInt, datas.Patient_ID || 0)
            .input("User_ID", sql.BigInt, datas.User_ID || null)
            .input("FirstName", sql.VarChar(100), datas.FirstName || "")
            .input("LastName", sql.VarChar(100), datas.LastName || "")
            .input("DateOfBirth", sql.SmallDateTime, datas.DateOfBirth || "19000101")
            .input("Gender", sql.VarChar(10), datas.Gender || "")
            .input("ContactNumber", sql.VarChar(20), datas.ContactNumber || "")
            .input("Address1", sql.VarChar(500), datas.Address1 || "")
            .input("Address2", sql.VarChar(500), datas.Address2 || "")
            .input("CreatedBy", sql.BigInt, datas.CreatedBy || 0)
            .input("CreatedOn", sql.SmallDateTime, new Date())
            .input("ModifiedBy", sql.BigInt, datas.ModifiedBy || 0)
            .input("ModifiedOn", sql.SmallDateTime, new Date())
            .input("OpType", sql.VarChar(10), datas.OpType); 

        const action = await request.query(query);
        return action.recordset;

    } catch (err) {
        console.error("Error in SavePatient:", err);
        throw err;
    } 
};

const GetPatientsHelp = async (dbConfig) => {
  const connection = new sql.ConnectionPool(dbConfig);
  const pool = await connection.connect();
  const query = await loadSqlQuery("Masters/Patients/GetAllPatients");
  const action = await pool.request()  
  .query(query)
  return action.recordset
}

const GetOnePatientsHelp = async (dbConfig,Patient_ID) => {
  const connection = new sql.ConnectionPool(dbConfig);
  const pool = await connection.connect();
  const query = await loadSqlQuery("Masters/Patients/GetOnePatients");
  const action = await pool.request()  
  .input('Patient_ID',sql.BigInt,Patient_ID)
  .query(query)
  return action.recordset
}




module.exports = {
    SavePatient: SavePatient,
    GetPatientsHelp:GetPatientsHelp,
    GetOnePatientsHelp:GetOnePatientsHelp
};