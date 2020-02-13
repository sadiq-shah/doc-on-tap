const DoctorScheduleModel = require('./../models').DoctorSchedule;

const createDoctorSchedule = async (doctorSchedule) => {
    try {
        const newDoctorSchedule = await DoctorScheduleModel.create({
            ...doctorSchedule
        });
        return {success: true, data: newDoctorSchedule};
    }   
    catch (err) {
        return {success: false, data: err};
    }
}

const listDoctorSchedules = async () => {   
    try{
        const doctorSchedules = await DoctorScheduleModel.findAll();
        return { success:true, data: doctorSchedules };
    }
    catch(err) {
        return { success: false, data: err };
    }
}


const getDoctorScheduleById = async (doctorScheduleId) => {
    try {
        const doctorSchedule = await DoctorScheduleModel.findByPk(doctorScheduleId);
        if(doctorSchedule) {
            return {success:true, data: doctorSchedule};
        }
        else {
            return {success:true, message: "Not FOund"}
        }
    }
    catch(err) {
        return { success: false, data: err};
    }
}

const updateDoctorSchedule = async (doctorScheduleId,doctorScheduleUpdate) => {
    try {
        const doctorSchedule = await DoctorScheduleModel.findByPk(doctorScheduleId);
        if(doctorSchedule) {
            try {
                const updatedDoctorSchedule = await doctorSchedule.update( doctorScheduleUpdate,{fields: Object.keys(doctorScheduleUpdate) });
                return { success: true, data: updatedDoctorSchedule };
            }
            catch (err) {
                return { success: false, data: err};   
            }
          
        }
        else {
            return { success: true, data: "Doctor Schedule Not Found"};
        }
    }
    catch (err) {
        return { success: false, data: err};
    }
}


const destroyDoctorSchedule = async (doctorScheduleId) => {
    try {
      const doctorSchedule = await DoctorScheduleModel.findByPk(doctorScheduleId);
      if(doctorSchedule) {
        await doctorSchedule.destroy();
        return {success :true, data: "Resource Deleted"};
      }
      else {
          return {success: false, data: "Doctor Schedule Not Found"};
      }
    } 
    catch (err) {
      return { success: false, data: err };
    }
}

module.exports = {
    createDoctorSchedule,
    listDoctorSchedules,
    getDoctorScheduleById,
    updateDoctorSchedule,
    destroyDoctorSchedule
}