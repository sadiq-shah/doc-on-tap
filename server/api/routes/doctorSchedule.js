const Router = require("express").Router();
const DoctorScheduleController = require('./../../controllers').DoctorScheduleController;

Router.get("/", DoctorScheduleController.list);
Router.get("/:id", DoctorScheduleController.retrieve);
Router.post("/", DoctorScheduleController.create);
Router.put("/:id", DoctorScheduleController.update);
Router.delete("/:id", DoctorScheduleController.destroy);
Router.get("/", DoctorScheduleController.list);



module.exports = Router