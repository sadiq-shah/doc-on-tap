const PatientModel = require('./../models').Patient;

const createPatient = async (patient) => {
    try {
        console.log("Failed");
        const newPatient = await PatientModel.create({
            ...patient
        });
        return {status: 200, success: true, data: newPatient};
    }   
    catch (err) {
        
        return {success: false, data: err};
    }
}

const listPatients = async () => {   
    try{
        const patients = await PatientModel.findAll();
        return { success:true, data: patients };
    }
    catch(err) {
        return {status: 200, success: false, data: err };
    }
}


const getPatientById = async (patientId) => {
    try {
        const patient = await PatientModel.findByPk(patientId);
        if(patient) {
            return {status: 200, success:true, data: patient};
        }
        else {
            return {status: 404, success:true, data: "Not FOund"}
        }
    }
    catch(err) {
        return {status: 200, success: false, data: err};
    }
}

const updatePatient = async (patientId,patientUpdate) => {
    try {
        const patient = await PatientModel.findByPk(patientId);
        if(patient) {
            try {
                const updatedPatient = await patient.update( patientUpdate,{fields: Object.keys(patientUpdate) });
                return {status: 200, success: true, data: updatedPatient };
            }
            catch (err) {
                return {status: 200, success: false, data: err};   
            }
          
        }
        else {
            return {status: 200, success: true, data: "Patient Not Found"};
        }
    }
    catch (err) {
        return {status: 200, success: false, data: err};
    }
}


const destroyPatient = async (patientId) => {
    try {
      const patient = await PatientModel.findByPk(patientId);
      if(patient) {
        await patient.destroy();
        return {status: 200, success :true, data: "Resource Deleted"};
      }
      else {
          return {status: 200, success: false, data: "Patient Not Found"};
      }
    } 
    catch (err) {
      return {status: 200, success: false, data: err };
    }
}

module.exports = {
    createPatient,
    listPatients,
    getPatientById,
    updatePatient,
    destroyPatient
}