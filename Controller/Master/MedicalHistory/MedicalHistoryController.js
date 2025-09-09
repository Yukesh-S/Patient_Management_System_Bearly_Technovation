const asyncErrorHandler = require("../../../utils/asyncErrorHandler");
const model = require("../../../Model/Masters/MedicalHistory");

const SaveMedicalHistory = asyncErrorHandler(async (req, res, dbConfig) => {
  const datas = req.body;
  const data = await model.SaveMedicalHistory(dbConfig, datas);
  res.json(data);
});

const GetMedicalHistories = asyncErrorHandler(async (req, res, dbConfig) => {
    console.log(res.data,'res.data')
  const data = await model.GetMedicalHistories(dbConfig);
  res.json(data);
});

const GetOneMedicalHistory = asyncErrorHandler(async (req, res, dbConfig) => {
  const History_ID = req.params.History_ID;
  const data = await model.GetOneMedicalHistory(dbConfig, History_ID);
  res.json(data);
});

module.exports = {
  SaveMedicalHistory:SaveMedicalHistory,
  GetMedicalHistories:GetMedicalHistories,
  GetOneMedicalHistory:GetOneMedicalHistory,
};
