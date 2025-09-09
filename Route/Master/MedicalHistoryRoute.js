const express = require("express");
const router = express.Router();
const {
  SaveMedicalHistory,
  GetMedicalHistories,
  GetOneMedicalHistory,
} = require("../../Controller/Master/MedicalHistory/MedicalHistoryController");

router.post("/SaveMedicalhistory", SaveMedicalHistory);
router.get("/GetAllMedicalhistory", GetMedicalHistories);
router.get("GetOneMedicalhistory/:History_ID", GetOneMedicalHistory);

module.exports = router;
