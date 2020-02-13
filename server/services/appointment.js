const AppointmentModel = require('./../models').Appointment;

const createAppointment = async (appointment) => {
    try {
        const newAppointment = await AppointmentModel.create({
            ...appointment
        });
        return {success: true, data: newAppointment};
    }   
    catch (err) {
        return {success: false, data: err};
    }
}

const listAppointments = async () => {   
    try{
        const appointments = await AppointmentModel.findAll();
        return { success:true, data: appointments };
    }
    catch(err) {
        return { success: false, data: err };
    }

}


const getAppointmentById = async (appointmentId) => {
    try {
        const appointment = await AppointmentModel.findByPk(appointmentId);
        if(appointment) {
            return {success:true, data: appointment};
        }
        else {
            return {success:true, message: "Not FOund"}
        }
    }
    catch(err) {
        return { success: false, data: err};
    }
}

const updateAppointment = async (appointmentId,appointmentUpdate) => {
    try {
        const appointment = await AppointmentModel.findByPk(appointmentId);
        if(appointment) {
            try {
                const updatedAppointment = await appointment.update( appointmentUpdate,{fields: Object.keys(appointmentUpdate) });
                return { success: true, data: updatedAppointment };
            }
            catch (err) {
                return { success: false, data: err};   
            }
          
        }
        else {
            return { success: true, data: "Appointment Not Found"};
        }
    }
    catch (err) {
        return { success: false, data: err};
    }
}


const destroyAppointment = async (appointmentId) => {
    try {
      const appointment = await AppointmentModel.findByPk(appointmentId);
      if(appointment) {
        await appointment.destroy();
        return {success :true, data: "Resource Deleted"};
      }
      else {
          return {success: false, data: "Appointment Not Found"};
      }
    } 
    catch (err) {
      return { success: false, data: err };
    }
}

module.exports = {
    createAppointment,
    listAppointments,
    getAppointmentById,
    updateAppointment,
    destroyAppointment
}