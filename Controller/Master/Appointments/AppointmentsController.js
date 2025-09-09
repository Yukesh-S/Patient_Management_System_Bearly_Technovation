const asyncErrorHandler = require("../../../utils/asyncErrorHandler");
const model = require("../../../Model/Masters/Appointments"); 

// Save (Insert/Update/Delete)
const SaveAppointment = asyncErrorHandler(async (req, res, dbConfig) => {
  console.log(req.body, "req.body");
  const datas = req.body;
  const data = await model.SaveAppointment(dbConfig, datas);
  res.json(data);
});

// Get All
const GetAllAppointments = asyncErrorHandler(async (req, res, dbConfig) => {
  const data = await model.GetAllAppointments(dbConfig);
  res.json(data);
});

// Get One by Appointment_ID
const GetOneAppointment = asyncErrorHandler(async (req, res, dbConfig) => {
  const Appointment_ID = req.params.Appointment_ID;
  const data = await model.GetOneAppointment(dbConfig, Appointment_ID);
  res.json(data);
});

module.exports = {
  SaveAppointment:SaveAppointment,
  GetAllAppointments:GetAllAppointments,
  GetOneAppointment:GetOneAppointment,
};
