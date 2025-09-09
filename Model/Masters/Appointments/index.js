const sql = require("mssql");
const { loadSqlQuery } = require("../../Utill");

// Save (Insert/Update/Delete)
const SaveAppointment = async (dbConfig, datas) => {
  const pool = await new sql.ConnectionPool(dbConfig).connect();
  const query = await loadSqlQuery("Masters/Appointments/SaveAppointment");

  const request = pool.request()
    .input("Appointment_ID", sql.BigInt, datas.Appointment_ID || 0)
    .input("Patient_ID", sql.BigInt, datas.Patient_ID)
    .input("Doctor_ID", sql.BigInt, datas.Doctor_ID)
    .input("ScheduledDateTime", sql.SmallDateTime, datas.ScheduledDateTime || '19000101')
    .input("Status", sql.VarChar(20), datas.Status || 'SCHEDULED')
    .input("Notes", sql.NVarChar(sql.MAX), datas.Notes || null)
    .input("CreatedBy", sql.BigInt, datas.CreatedBy || 0)
    .input("ModifiedBy", sql.BigInt, datas.ModifiedBy || 0)
    .input("OpType", sql.VarChar(10), datas.OpType); 

  const action = await request.query(query);
  return action.recordset;
};

// GetAll
const GetAllAppointments = async (dbConfig) => {
  const pool = await new sql.ConnectionPool(dbConfig).connect();
  const query = await loadSqlQuery("Masters/Appointments/GetAppointments");

  const result = await pool.request().query(query);
  return result.recordset;
};

// GetOne
const GetOneAppointment = async (dbConfig, appointmentId) => {
  const pool = await new sql.ConnectionPool(dbConfig).connect();
  const query = await loadSqlQuery("Masters/Appointments/GetOneAppointments"); 
  const result = await pool.request()
    .input("Appointment_ID", sql.BigInt, appointmentId)
    .query(query);

  return result.recordset; 
};

module.exports = { 
    SaveAppointment :SaveAppointment, 
    GetAllAppointments:GetAllAppointments,
    GetOneAppointment:GetOneAppointment };
