const Router = require("express").Router();
const PatientController = require('./../../controllers/').PatientController;
const { checkIfUserIsPatient, ifPatientExist } = require("./../middlewares/patient");

Router.get("/", PatientController.list);
Router.get("/:id", PatientController.retrieve);
Router.post("/", checkIfUserIsPatient, ifPatientExist, PatientController.create);
Router.put("/:id", PatientController.update);
Router.delete("/:id", PatientController.destroy);
Router.get("/", PatientController.list);



module.exports = Router