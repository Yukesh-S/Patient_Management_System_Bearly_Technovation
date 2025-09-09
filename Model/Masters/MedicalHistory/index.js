const sql = require("mssql");
const { loadSqlQuery } = require("../../Utill");

const SaveMedicalHistory = async (dbConfig, datas) => {
  const connection = new sql.ConnectionPool(dbConfig);
  const pool = await connection.connect();

  const query = await loadSqlQuery("Masters/MedicalHistory/SaveMedicalHistory");

  const action = await pool
    .request()
    .input("OpType", sql.VarChar(10), datas.OpType)
    .input("History_ID", sql.BigInt, datas.History_ID || 0)
    .input("Patient_ID", sql.BigInt, datas.Patient_ID || 0)
    .input("Doctor_ID", sql.BigInt, datas.Doctor_ID || 0)
    .input("Appointment_ID", sql.BigInt, datas.Appointment_ID || 0)
    .input("Diagnosis", sql.VarChar(sql.MAX), datas.Diagnosis || '')
    .input("Prescription", sql.VarChar(sql.MAX), datas.Prescription || '')
    .input("Notes", sql.VarChar(sql.MAX), datas.Notes || '')
    .input("RecordDate", sql.SmallDateTime, datas.RecordDate || '19000101')
    .input("CreatedBy", sql.BigInt, datas.CreatedBy || 0)
    .input("ModifiedBy", sql.BigInt, datas.ModifiedBy || 0)
    .query(query);

  return action.recordset;
};

const GetMedicalHistories = async (dbConfig) => {
  const connection = new sql.ConnectionPool(dbConfig);
  const pool = await connection.connect();

  const query = await loadSqlQuery("Masters/MedicalHistory/GetAllMedicalHistory");


  const result = await pool.request().query(query);
  return result.recordset;
};

const GetOneMedicalHistory = async (dbConfig, History_ID) => {
  const connection = new sql.ConnectionPool(dbConfig);
  const pool = await connection.connect();

  const query = await loadSqlQuery("Masters/MedicalHistory/GetOneMedicalHistory");


  const result = await pool.request()
    .input("History_ID", sql.BigInt, History_ID)
    .query(query);

  return result.recordset;
};

module.exports = {
  SaveMedicalHistory:SaveMedicalHistory,
  GetMedicalHistories:GetMedicalHistories,
  GetOneMedicalHistory:GetOneMedicalHistory,
};
