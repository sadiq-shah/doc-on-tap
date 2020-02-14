const PatientService = require("../../services").PatientService;
const UserService = require("../../services").UserService;

const checkIfUserIsPatient = async (req,res,next) => {
    const userId = req.body.userId;
    try {
        const {_, data} = await UserService.getUserById(userId);
        if(data && data.userType == 1) {
            next();
        }
        else {
            res.status(500).json({success: false, message: "Invalid User Id."});
        }
    }
    catch (ex) {
        res.status(500).json({success: false, message: ex});
    }
} 
const ifPatientExist = async (req,res,next) => {
    const userId = req.body.userId;
    try {
        const {_, s, data} = await PatientService.getPatientByUserId(userId);
        console.log(data);
        if(data && data.userId) {
            console.log("Here");
            res.status(500).json({success: false, message: "Patient with the given User Id Already Exists."});
        }
        else {
            console.log("Why not");
            next();
        }
    }
    catch (ex) {
        res.status(500).json({success: false, message: ex});
    }
} 

module.exports = {
    ifPatientExist,
    checkIfUserIsPatient
}