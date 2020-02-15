const Router = require("express").Router();
const DoctorController = require('./../../controllers').DoctorController;

Router.get("/", DoctorController.list);
Router.get("/:id", DoctorController.retrieve);
Router.put("/:id", DoctorController.update);
Router.delete("/:id", DoctorController.destroy);



module.exports = Router