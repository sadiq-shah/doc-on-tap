const AssessmentModel = require('./../models').Assessment;
const statusCodes = require("./../constants/statusCodes");
const ConditionModel = require("../models").Condition;
const SymptomModel = require("../models").Symptom;
const PatientModel = require("../models").Patient;

const createAssessment = async (assessment) => {
    try {
        const newAssessment = await AssessmentModel.create({
            ...assessment
        });
        return {statusCode: statusCodes.CREATED, success: true, data: newAssessment};
    }   
    catch (err) {  
        return {statusCode: statusCodes.BAD_REQUEST, success: false, data: err};
    }
}

const listAssessments = async () => {   
    try{
        const assessments = await AssessmentModel.findAll({
            include:[{
               model: ConditionModel,
               as: "conditions"
              },
              {
                model: SymptomModel,
                as: "symptoms"
              }
            ],
            attributes: ['id', "patientId"]
            });
        return {statusCode: statusCodes.OK, success:true, data: assessments };
    }
    catch(err) {
        return {statusCode: statusCodes.BAD_REQUEST, success: false, data: err };
    }
}

const getAssessmentById = async (assessmentId) => {
    try {
        const assessment = await AssessmentModel.findOne({
            where: {id: assessmentId},
            include:[{
               model: ConditionModel,
               as: "conditions"
              },
              {
                model: SymptomModel,
                as: "symptoms"
              }
            ],
            attributes: ['id', "patientId"]

            });
        if(assessment) {
            return {statusCode: statusCodes.OK, success:true, data: assessment};
        }
        else {
            return {statusCode: statusCodes.NOT_FOUND, success:true, data: "Not Found"}
        }
    }
    catch(err) {
        return {statusCode: statusCodes.BAD_REQUEST, success: false, data: err};
    }
}

const updateAssessment = async (assessmentId,assessmentUpdate) => {
    try {
        const assessment = await AssessmentModel.findByPk(assessmentId);
        if(assessment) {
            try {
                const updatedAssessment = await assessment.update( assessmentUpdate,{fields: Object.keys(assessmentUpdate) });
                return {statusCode: statusCodes.OK, success: true, data: updatedAssessment };
            }
            catch (err) {
                return {statusCode: statusCodes.BAD_REQUEST, success: false, data: err};   
            }
        }
        else {
            return {statusCode: statusCodes.NOT_FOUND, success: true, data: "Assessment Not Found"};
        }
    }
    catch (err) {
        return {statusCode: statusCodes.BAD_REQUEST, success: false, data: err};
    }
}

const destroyAssessment = async (assessmentId) => {
    try {
      const assessment = await AssessmentModel.findByPk(assessmentId);
      if(assessment) {
        await assessment.destroy();
        return {statusCode: statusCodes.NO_CONTENT, success :true, data: "Resource Deleted"};
      }
      else {
          return {statusCode: statusCodes.NOT_FOUND, success: false, data: "Assessment Not Found"};
      }
    } 
    catch (err) {
      return {statusCode: statusCodes.BAD_REQUEST, success: false, data: err };
    }
}

const getAssessmentsByPatientId = async (patientId) => {
   console.log("Here");
    try {
        const assessment = await AssessmentModel.findAll({
            where: {patientId: patientId},
            include:[{
               model: ConditionModel,
               as: "conditions"
              },
              {
                model: SymptomModel,
                as: "symptoms"
              }
            ],
            attributes: ['id', "patientId"]
            });
        if(assessment) {
            return {statusCode: statusCodes.OK, success:true, data: assessment};
        }
        else {
            return {statusCode: statusCodes.NOT_FOUND, success:true, data: "Not Found"}
        }
    }
    catch(err) {
        return {statusCode: statusCodes.BAD_REQUEST, success: false, data: err};
    }
}

module.exports = {
    createAssessment,
    listAssessments,
    getAssessmentById,
    updateAssessment,
    destroyAssessment,
    getAssessmentsByPatientId
}