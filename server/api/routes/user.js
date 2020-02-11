const Router = require("express").Router();
const UserController = require('./../../controllers/user');

Router.get("/", UserController.list);
Router.get("/:id", UserController.retrieve);
Router.post("/", UserController.create);
Router.put("/:id", UserController.update);
Router.delete("/:id", UserController.destroy);
Router.get("/", UserController.list);



module.exports = Router