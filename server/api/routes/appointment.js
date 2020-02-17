const Router = require("express").Router();
const AppointmentController = require('./../../controllers').AppointmentController;

Router.get("/", AppointmentController.list);
Router.get("/:id", AppointmentController.retrieve);

Router.post("/", AppointmentController.create);
Router.put("/:id", AppointmentController.update);
Router.delete("/:id", AppointmentController.destroy);



module.exports = Router