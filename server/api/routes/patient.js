const Router = require("express").Router();
const PatientController = require('./../../controllers/').PatientController;
const AssessmentController = require('./../../controllers').AssessmentController;
const { ifPatientDoesExist } = require("./../middlewares/patient");

Router.get("/", PatientController.list);
Router.get("/:id", PatientController.retrieve);
Router.put("/:id", PatientController.update);
Router.delete("/:id", PatientController.destroy);



/**
* @swagger
* /api/v1/patient/:patientId/assessment:
*   get:
*     tags:
*       - Assessment
*     name: List Patient Assessment
*     summary: List All Assessments of a patient.
*     produces:
*       - application/json
*     responses:
*       200:
*         description: All assessments are listed successfully.
*         schema:
*           type: object
*           properties: 
*             success:
*               type: boolean
*               default: true
*             data:
*               type: array
*               items:
*                   type: object
*                   properties:
*                       id:
*                           type:number
*                       patientId:
*                           type:number
*                       conditions:
*                           type: array
*                           items:
*                               type: object
*                               properties:
*                                   id:
*                                       type: number
*                                   assessmentId:
*                                       type:number
*                                   name:
*                                       type: string
*                                   probability:
*                                       type: number
*                                   createdAt:
*                                       type: string
*                                       format: date
*                                   updatedAt:
*                                       type: string
*                                       format: date
*                       symptoms:
*                           type: array
*                           items:
*                               type: object
*                               properties:
*                                   id:
*                                       type: number
*                                   assessmentId:
*                                       type: number
*                                   name:
*                                       type: string
*                                   createdAt:
*                                       type: string
*                                       format: date
*                                   updatedAt:
*                                       type: string
*                                       format: date                               
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
Router.get("/:id/assessment", PatientController.assessmentlist);

/**
* @swagger
* /api/v1/patient/:patientId/assessment:
*   post:
*     tags:
*       - Assessment
*     name: Create Assessment
*     summary: Create a new Assessment. You have to pass symptoms and conditions array.
*     consumes:
*       - application/json
*     produces:
*       - application/json
*     parameters:
*       - name: body
*         in: body
*         schema:
*               type: object
*               properties: 
*                   conditions:
*                       type: array
*                       items:
*                           type: object
*                           properties:
*                               name:
*                                   type: string
*                               probability:
*                                   type: number
*                                   format: float                   
*                   symptoms:
*                       type: array
*                       items:
*                           type: object
*                           properties:
*                              name:
*                                   type: string                   
*         required:
*           - conditions
*           - symptoms
*     responses:
*       201:
*         description: Assessment Created Successfully. Make A request to see it properly.
*         schema:
*           type: object
*           properties: 
*             success:
*               type: boolean
*               default: true
*             data:
*               type: object
*               properties:
*                   newAssesment:
*                       type: object
*                       properties:
*                       id:
*                          type:number
*                   conditions:
*                       type: array
*                       items:
*                            type: object
*                            properties:
*                               name:
*                                   type: string
*                               probability:
*                                   type: number
*                                   default: 0.24
*                   symptoms:
*                       type: array
*                       items:
*                            type: object
*                            properties:
*                               name:
*                                   type: string                                
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
Router.post("/:patientId/assessment", ifPatientDoesExist, AssessmentController.create);

module.exports = Router