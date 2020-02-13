const DoctorModel = require('./../models').Doctor;

const createDoctor = async (doctor) => {
    try {
        const newDoctor = await DoctorModel.create({
            ...doctor
        });
        return {success: true, data: newDoctor};
    }   
    catch (err) {
        return {success: false, data: err};
    }
}

const listDoctors = async () => {   
    try{
        const doctors = await DoctorModel.findAll();
        return { success:true, data: doctors };
    }
    catch(err) {
        return { success: false, data: err };
    }

}


const getDoctorById = async (doctorId) => {
    try {
        const doctor = await DoctorModel.findByPk(doctorId);
        if(doctor) {
            return {success:true, data: doctor};
        }
        else {
            return {success:true, message: "Not FOund"}
        }
    }
    catch(err) {
        return { success: false, data: err};
    }
}

const updateDoctor = async (doctorId,doctorUpdate) => {
    try {
        const doctor = await DoctorModel.findByPk(doctorId);
        if(doctor) {
            try {
                const updatedDoctor = await doctor.update( doctorUpdate,{fields: Object.keys(doctorUpdate) });
                return { success: true, data: updatedDoctor };
            }
            catch (err) {
                return { success: false, data: err};   
            }
          
        }
        else {
            return { success: true, data: "Doctor Not Found"};
        }
    }
    catch (err) {
        return { success: false, data: err};
    }
}


const destroyDoctor = async (doctorId) => {
    try {
      const doctor = await DoctorModel.findByPk(doctorId);
      if(doctor) {
        await doctor.destroy();
        return {success :true, data: "Resource Deleted"};
      }
      else {
          return {success: false, data: "Doctor Not Found"};
      }
    } 
    catch (err) {
      return { success: false, data: err };
    }
}

module.exports = {
    createDoctor,
    listDoctors,
    getDoctorById,
    updateDoctor,
    destroyDoctor
}