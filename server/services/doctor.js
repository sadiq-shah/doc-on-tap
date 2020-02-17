const DoctorModel = require('./../models').Doctor;
const statusCodes = require("./../constants/statusCodes");
const UserModel = require("./../models").User;
const DoctorScheduleModel = require("./../models").DoctorSchedule;

const createDoctor = async (doctor) => {
    try {
        const newDoctor = await DoctorModel.create({
            ...doctor
        });
        return { statusCode: statusCodes.CREATED, success: true, data: newDoctor };
    }   
    catch (err) {
        return { statusCode: statusCodes.BAD_REQUEST, success: false, data: err };
    }
}

const listDoctors = async () => {   
    try{
        const doctors = await DoctorModel.findAll({ include:
            [
                { model: UserModel, as:"user",attributes: ['id']},
                { 
                    model: DoctorScheduleModel, 
                    as: "doctorSchedules",
                    attributes: ['from','to','doctorId']
                }
            ],
            attributes: ['id']
             
        });
        return { statusCode: statusCodes.OK, success:true, data: doctors };
    }
    catch(err) {
        return { statusCode: statusCodes.BAD_REQUEST, success: false, data: err };
    }
}


const getDoctorById = async (doctorId) => {
    try {
        const doctor = await DoctorModel.findByPk(doctorId,{
            include: ['user']
        });

        if(doctor) {
            return {statusCode: statusCodes.OK, success:true, data: doctor};
        }
        else {
            return {statusCode: statusCodes.NOT_FOUND, success:true, message: "Not Found"}
        }
    }
    catch(err) {
        return {statusCode: statusCodes.BAD_REQUEST, success: false, data: err};
    }
}

const updateDoctor = async (doctorId,doctorUpdate) => {
    try {
        const doctor = await DoctorModel.findByPk(doctorId);
        if(doctor) {
            try {
                const updatedDoctor = await doctor.update( doctorUpdate,{fields: Object.keys(doctorUpdate) });
                return { statusCode: statusCodes.OK, success: true, data: updatedDoctor };
            }
            catch (err) {
                return { statusCode: statusCodes.BAD_REQUEST, success: false, data: err};   
            }
        }
        else {
            return { statusCode: statusCodes.NOT_FOUND, success: true, data: "Doctor Not Found"};
        }
    }
    catch (err) {
        return { statusCode: statusCodes.BAD_REQUEST, success: false, data: err};
    }
}


const destroyDoctor = async (doctorId) => {
    try {
      const doctor = await DoctorModel.findByPk(doctorId);
      if(doctor) {
        await doctor.destroy();
        return {statusCode: statusCodes.NO_CONTENT, success :true, data: "Resource Deleted"};
      }
      else {
          return {statusCode: statusCodes.NOT_FOUND, success: false, data: "Doctor Not Found"};
      }
    } 
    catch (err) {
      return { statusCode: statusCodes.BAD_REQUEST, success: false, data: err };
    }
}

const getDoctorByUserId = async (userId) => {
    try {
        const doctor = await DoctorModel.findOne({
            where: {userId: userId},
            include :[
                { model: UserModel, as:"user"},
                { model: DoctorScheduleModel, as: "doctorSchedules"}
            ]
        });       
        if(doctor) {
            return {statusCode: statusCodes.OK, success:true, data: doctor};
        }
        else {
            return {statusCode: statusCodes.NOT_FOUND, success:true, data: "Not Found"};
        }
    }
    catch(err) {
        return {statusCode:statusCodes.BAD_REQUEST, success: false, data: err};
    }
}


module.exports = {
    createDoctor,
    listDoctors,
    getDoctorById,
    updateDoctor,
    destroyDoctor,
    getDoctorByUserId
}