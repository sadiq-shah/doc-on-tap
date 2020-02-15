const ConditionModel = require('./../models').Condition;
const statusCodes = require("./../constants/statusCodes");

const createCondition = async (condition) => {
    try {
        const newCondition = await ConditionModel.create({
            ...condition
        });
        return {statusCode: statusCodes.CREATED, success: true, data: newCondition};
    }   
    catch (err) {
        return {statusCode: statusCodes.BAD_REQUEST, success: false, data: err};
    }
}

const listConditions = async () => {   
    try {
        const conditions = await ConditionModel.findAll();
        return { statusCode: statusCodes.OK, success:true, data: conditions };
    }
    catch(err) {
        return { statusCode: statusCodes.BAD_REQUEST, success: false, data: err };
    }
}

const getConditionById = async (conditionId) => {
    try {
        const condition = await ConditionModel.findByPk(conditionId);
        if(condition) {
            return {statusCode: statusCodes.OK, success:true, data: condition};
        }
        else {
            return {statusCode: statusCodes.NOT_FOUND, success:true, message: "Not Found"}
        }
    }
    catch(err) {
        return { statusCode: statusCodes.BAD_REQUEST, success: false, data: err};
    }
}

const updateCondition = async (conditionId,conditionUpdate) => {
    try {
        const condition = await ConditionModel.findByPk(conditionId);
        if(condition) {
            try {
                const updatedCondition = await condition.update( conditionUpdate,{fields: Object.keys(conditionUpdate) });
                return { statusCode: statusCodes.OK, success: true, data: updatedCondition };
            }
            catch (err) {
                return { statusCode: statusCodes.BAD_REQUEST, success: false, data: err};   
            }
        }
        else {
            return { statusCode: statusCodes.NOT_FOUND, success: true, data: "Condition Not Found"};
        }
    }
    catch (err) {
        return { statusCode: statusCodes.BAD_REQUEST, success: false, data: err};
    }
}

const destroyCondition = async (conditionId) => {
    try {
      const condition = await ConditionModel.findByPk(conditionId);
      if(condition) {
        await condition.destroy();
        return {statusCode: statusCodes.NO_CONTENT, success :true, data: "Resource Deleted"};
      }
      else {
          return {statusCode: statusCodes.NOT_FOUND, success: false, data: "Condition Not Found"};
      }
    } 
    catch (err) {
      return { statusCode: statusCodes.BAD_REQUEST, success: false, data: err };
    }
}

module.exports = {
    createCondition,
    listConditions,
    getConditionById,
    updateCondition,
    destroyCondition
}