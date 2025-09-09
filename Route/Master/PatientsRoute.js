const express = require('express')
const PatientController = require('../../Controller/Master/Patients/PatientsController')

const router = express.Router()


router.post('/SavePatient', PatientController.SavePatient) 

router.get('/GetPatientsHelp', PatientController.GetPatientsHelp) 

router.get('/GetOnePatientsHelp/:Patient_ID', PatientController.GetOnePatientsHelp) 

module.exports = router