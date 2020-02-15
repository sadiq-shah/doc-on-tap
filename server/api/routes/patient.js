const Router = require("express").Router();
const PatientController = require('./../../controllers/').PatientController;
const { checkIfUserIsPatient, ifPatientExist } = require("./../middlewares/patient");


/**
* @swagger
* /api/v1/patient:
*   post:
*     tags:
*       - Patients
*     name: Create Patient
*     summary: Create a new patient. User with userType = 1 must exist in order for patient to get created.
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
*             location:
*               type: string
*             phoneNo:
*               type: string
*             isDiabetic:
*               type: boolean
*               default: false
*             isSmoker:
*               type: boolean
*               default: false
*             isHypertension:
*               type: boolean
*               default: false
*             isObese:
*               type: boolean
*               default: false
*         required:
*           - location
*           - phoneNo
*     responses:
*       201:
*         description: Patient Created Successfully.
*         schema:
*           type: object
*           properties: 
*             success:
*               type: boolean
*               default: true
*             data:
*               type: object
*               properties:
*                   id:
*                     type: number
*                     default: 1
*                   userId:
*                     type: number
*                     default: 1
*                   phoneNo:
*                     type: string
*                     default: 03318158386
*                   location:
*                     type: string
*                   isDiabetic:
*                     type: boolean
*                   isObese:
*                     type: boolean
*                   isSmoker:
*                     type: boolean
*                   isHypertension:
*                     type: boolean
*                   createdAt:
*                     type: string
*                     format: date
*                   updatedAt:
*                     type: string
*                     format: date
*       404:
*         description: Patient with the given id already exists.
*         schema:
*           type: object
*           properties: 
*             success:
*               type: boolean
*               default: false
*             message:
*               type: string
*               default: Patient with the given User Id Already Exists.
*       500:
*         description: Bad Request, Success in response will be false
*         schema:
*           type: object
*           properties: 
*             success:
*               type: boolean
*               default: false
*             err:
*               type: object
*/

Router.post("/", checkIfUserIsPatient, ifPatientExist, PatientController.create);
Router.get("/", PatientController.list);
Router.get("/:id", PatientController.retrieve);
Router.put("/:id", PatientController.update);
Router.delete("/:id", PatientController.destroy);

Router.get("/:id/assessments", PatientController.assessmentlist);


module.exports = Router