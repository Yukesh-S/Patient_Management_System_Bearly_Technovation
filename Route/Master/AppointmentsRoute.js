const express = require("express");
const router = express.Router();
const {
  SaveAppointment,
  GetAllAppointments,
  GetOneAppointment,
} = require("../../Controller/Master/Appointments/AppointmentsController");

router.post("/SaveAppointments", SaveAppointment);
router.get("/GetAllAppointments", GetAllAppointments);
router.get("/GetOneAppointments/:Appointment_ID", GetOneAppointment);

module.exports = router;
