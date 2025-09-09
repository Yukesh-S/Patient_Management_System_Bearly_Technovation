const asyncErrorHandler = require("../../../utils/asyncErrorHandler");
const model = require("../../../Model/Masters/Patients");


const SavePatient = asyncErrorHandler(async (req, res, dbConfig) => {
    console.log(req.body,'req.body')
  const datas = req.body;
  const data = await model.SavePatient(dbConfig, datas);
  res.json(data);
});

const GetPatientsHelp= asyncErrorHandler(async (req,res,dbConfig)=>{  
    const data=await model.GetPatientsHelp(dbConfig)
    res.json(data)
})

const GetOnePatientsHelp= asyncErrorHandler(async (req,res,dbConfig)=>{  
    const Patient_ID=req.params.Patient_ID
    const data=await model.GetOnePatientsHelp(dbConfig,Patient_ID)
    res.json(data)
})

module.exports = {
  SavePatient: SavePatient,
  GetPatientsHelp:GetPatientsHelp,
  GetOnePatientsHelp:GetOnePatientsHelp
};