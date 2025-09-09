const asyncErrorHandler = require("../../../utils/asyncErrorHandler");
const model = require("../../../Model/Masters/Doctor");

const SaveDoctor = asyncErrorHandler(async (req, res, dbConfig) => {
    console.log(req.body, 'req.body');
    const datas = req.body;
    const data = await model.SaveDoctor(dbConfig, datas);
    res.json(data);
});

const GetDoctorsHelp = asyncErrorHandler(async (req, res, dbConfig) => {  
    const data = await model.GetDoctorsHelp(dbConfig);
    res.json(data);
});

const GetOneDoctorsHelp = asyncErrorHandler(async (req, res, dbConfig) => {  
    const Doctor_ID = req.params.Doctor_ID;
    const data = await model.GetOneDoctorsHelp(dbConfig, Doctor_ID);
    res.json(data);
});

module.exports = {
    SaveDoctor: SaveDoctor,
    GetDoctorsHelp: GetDoctorsHelp,
    GetOneDoctorsHelp: GetOneDoctorsHelp
};