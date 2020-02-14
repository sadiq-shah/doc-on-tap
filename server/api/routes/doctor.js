const Router = require("express").Router();
const DoctorController = require('./../../controllers').DoctorController;
const { checkIfUserIsDoctor, ifDoctorExist } = require("./../middlewares/doctor");

Router.get("/", DoctorController.list);
Router.get("/:id", DoctorController.retrieve);
Router.post("/", checkIfUserIsDoctor, ifDoctorExist, DoctorController.create);
Router.put("/:id", DoctorController.update);
Router.delete("/:id", DoctorController.destroy);
Router.get("/", DoctorController.list);



module.exports = Router