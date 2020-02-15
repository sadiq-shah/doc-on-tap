const Router = require("express").Router();
const AssessmentController = require('./../../controllers').AssessmentController;
const { ifPatientDoesExist } = require("./../middlewares/patient");

Router.get("/", AssessmentController.list);
Router.get("/:id", AssessmentController.retrieve);
Router.post("/", ifPatientDoesExist, AssessmentController.create);
Router.put("/:id", AssessmentController.update);
Router.delete("/:id", AssessmentController.destroy);




module.exports = Router