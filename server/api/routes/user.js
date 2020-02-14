const Router = require("express").Router();
const UserController = require('./../../controllers/user');
/**
 * @swagger
 * definitions:
 *  User:
 *    type: object
 *    properties:
 *      id:
 *        type: integer
 *      name:
 *        type: string
 *      email:
 *        type: string
 *        format: email
 *        description: Email of the user is unique.
 *      password:
 *        type: string
 *        format: password
 *      dob:
 *        type: string
 *      createdAt:
 *        type: string
 *        format: date
 *      updatedAt:
 *        type: string
 *        format: date
 *      required:
 *        - name
 *        - email
 *        - password
 *        - dob
 */


/**
* @swagger
* /api/v1/user:
*   post:
*     tags:
*       - Users
*     name: Create User
*     summary: Create a new user
*     consumes:
*       - application/json
*     produces:
*       - application/json
*     parameters:
*       - name: body
*         in: body
*         schema:
*           type: object
*           properties:
*             name:
*               type: string
*             email:
*               type: string
*               format: email
*             password:
*               type: string
*               format: password
*             dob:
*               type: string
*               format: date
*         required:
*           - name
*           - email
*           - password
*           - dob
*     responses:
*       200:
*         description: User Created Successfully.
*         schema:
*           $ref: '#/definitions/User'
*       401:
*         description: Bad username, not found in db
*       403:
*         description: Required Parameters Needed
*/
Router.post("/", UserController.create);
/**
* @swagger
* /api/v1/user:
*   get:
*     tags:
*       - Users
*     name: List All Users
*     summary: Return All Users
*     consumes:
*       - application/json
*     produces:
*       - application/json
*     responses:
*       200:
*         description: An Array Of All Users Successfully.
*         schema:
*           $ref: '#/definitions/User'
*       401:
*         description: Bad username, not found in db
*       403:
*         description: Required Parameters Needed
*/
Router.get("/", UserController.list);

Router.get("/:id", UserController.retrieve);

Router.put("/:id", UserController.update);
Router.delete("/:id", UserController.destroy);
Router.get("/", UserController.list);
Router.get("/:id/user-data")
module.exports = Router