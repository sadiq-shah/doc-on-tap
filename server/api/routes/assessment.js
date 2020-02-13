const Router = require("express").Router();
const AssessmentController = require('./../../controllers').AssessmentController;

Router.get("/", AssessmentController.list);
Router.get("/:id", AssessmentController.retrieve);
Router.post("/", AssessmentController.create);
Router.put("/:id", AssessmentController.update);
Router.delete("/:id", AssessmentController.destroy);
Router.get("/", AssessmentController.list);



module.exports = Router