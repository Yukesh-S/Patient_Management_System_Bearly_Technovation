const express = require("express");


const PatientsRoute = require("./PatientsRoute");
const doctorsRoute = require('./DoctorRoute'); 
const AppointmentsRoute = require('./AppointmentsRoute'); 
const MedicalHistoryRoute = require('./MedicalHistoryRoute');

const router = express.Router();
router.use("/patients", PatientsRoute);
router.use('/doctors', doctorsRoute); 
router.use('/appointments', AppointmentsRoute); 
router.use('/medicalhistory', MedicalHistoryRoute);

module.exports = router;
