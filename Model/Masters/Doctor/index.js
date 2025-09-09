const sql = require("mssql");
const { loadSqlQuery } = require("../../Utill");

const SaveDoctor = async (dbConfig, datas) => {
    console.log(datas, 'datas');
    let pool;
    
    try {
        pool = await new sql.ConnectionPool(dbConfig).connect();
        const query = await loadSqlQuery("Masters/Doctor/SaveDoctors"); 

        const request = pool.request()
            .input("Doctor_ID", sql.BigInt, datas.Doctor_ID || 0)
            .input("User_ID", sql.BigInt, datas.User_ID || null)
            .input("FirstName", sql.VarChar(100), datas.FirstName || "")
            .input("LastName", sql.VarChar(100), datas.LastName || "")
            .input("Specialization", sql.VarChar(100), datas.Specialization || "")
            .input("Department", sql.VarChar(100), datas.Department || "")
            .input("Availability", sql.VarChar(sql.MAX), datas.Availability || "")
            .input("CreatedBy", sql.BigInt, datas.CreatedBy || 0)
            .input("CreatedOn", sql.SmallDateTime, new Date())
            .input("ModifiedBy", sql.BigInt, datas.ModifiedBy || 0)
            .input("ModifiedOn", sql.SmallDateTime, new Date())
            .input("OpType", sql.VarChar(10), datas.OpType); 

        const action = await request.query(query);
        return action.recordset;

    } catch (err) {
        console.error("Error in SaveDoctor:", err);
        throw err;
    } 
};

const GetDoctorsHelp = async (dbConfig) => {
  const connection = new sql.ConnectionPool(dbConfig);
  const pool = await connection.connect();
  const query = await loadSqlQuery("Masters/Doctor/GetAllDoctor");
  const action = await pool.request()  
  .query(query)
  return action.recordset
}

const GetOneDoctorsHelp = async (dbConfig, Doctor_ID) => {
  const connection = new sql.ConnectionPool(dbConfig);
  const pool = await connection.connect();
  const query = await loadSqlQuery("Masters/Doctor/GetOneDoctor");
  const action = await pool.request()  
  .input('Doctor_ID', sql.BigInt, Doctor_ID)
  .query(query)
  return action.recordset
}

module.exports = {
    SaveDoctor: SaveDoctor,
    GetDoctorsHelp: GetDoctorsHelp,
    GetOneDoctorsHelp: GetOneDoctorsHelp
};