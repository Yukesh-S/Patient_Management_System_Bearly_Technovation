const express = require('express');
const router = express.Router();
const DoctorController = require('../../Controller/Master/Doctor/DoctorController');


router.post('/SaveDoctor',DoctorController.SaveDoctor);
router.get('/DoctorsList',DoctorController.GetDoctorsHelp);
router.get('/GetDoctor/:Doctor_ID',DoctorController.GetOneDoctorsHelp);

module.exports = router;