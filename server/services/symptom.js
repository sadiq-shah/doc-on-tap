const SymptomModel = require('./../models').Symptom;

const createSymptom = async (symptom) => {
    try {
        const newSymptom = await SymptomModel.create({
            ...symptom
        });
        return {success: true, data: newSymptom};
    }   
    catch (err) {
        return {success: false, data: err};
    }
}

const listSymptoms = async () => {   
    try{
        const symptoms = await SymptomModel.findAll();
        return { success:true, data: symptoms };
    }
    catch(err) {
        return { success: false, data: err };
    }
}


const getSymptomById = async (symptomId) => {
    try {
        const symptom = await SymptomModel.findByPk(symptomId);
        if(symptom) {
            return {success:true, data: symptom};
        }
        else {
            return {success:true, message: "Not FOund"}
        }
    }
    catch(err) {
        return { success: false, data: err};
    }
}

const updateSymptom = async (symptomId,symptomUpdate) => {
    try {
        const symptom = await SymptomModel.findByPk(symptomId);
        if(symptom) {
            try {
                const updatedSymptom = await symptom.update( symptomUpdate,{fields: Object.keys(symptomUpdate) });
                return { success: true, data: updatedSymptom };
            }
            catch (err) {
                return { success: false, data: err};   
            }
          
        }
        else {
            return { success: true, data: "Symptom Not Found"};
        }
    }
    catch (err) {
        return { success: false, data: err};
    }
}


const destroySymptom = async (symptomId) => {
    try {
      const symptom = await SymptomModel.findByPk(symptomId);
      if(symptom) {
        await symptom.destroy();
        return {success :true, data: "Resource Deleted"};
      }
      else {
          return {success: false, data: "Symptom Not Found"};
      }
    } 
    catch (err) {
      return { success: false, data: err };
    }
}

module.exports = {
    createSymptom,
    listSymptoms,
    getSymptomById,
    updateSymptom,
    destroySymptom
}