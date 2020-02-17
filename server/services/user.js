const UserModel = require('./../models').User;
const statusCodes = require("./../constants/statusCodes");
const { passwordValidity, hashPassword } = require("../functions/helpers");
const PatientService = require('./patient');
const DoctorService = require('./doctor');

const createUser = async (user) => {
    try {
        user.password = await hashPassword(user.password);
    }
    catch(err) {
        return {statusCode: statusCodes.BAD_REQUEST, success: false, data: err};    
    }
    try {
        // Checking If User Already Exist
        let isUser = await UserModel.findOne({
            where: {email: user.email}
        });    
        if(isUser) {
            return {statusCode: statusCodes.NOT_FOUND, success: false, data: "Given Email Address Already Exists."};
        }
        //Creating New User
        const newUser = await UserModel.create({
            ...user
        });
        
        return {statusCode: statusCodes.CREATED, success: true, data: newUser};
    }   
    catch (err) {
        return {statusCode: statusCodes.BAD_REQUEST, success: false, data: err};
    }
}

const listUsers = async () => {
    try{
        const users = await UserModel.findAll();
        return { success:true, data: users };
    }
    catch(err) {
        return { success: false, data: err };
    }
}

const getUserById = async (userId) => {
    try {
        const data = await UserModel.findByPk(userId);
        if(data) {
            return {success:true, data: data};
        }
        else {
            return {success:false, data: "Not FOund"}
        }
    }
    catch(err) {
        return { success: false, data: err};
    }
}

const updateUser = async (userId,userUpdate) => {
    try {
        const user = await UserModel.findByPk(userId);
        if(user) {
            try {
                console.log(userUpdate);
                const updatedUser = await user.update( userUpdate,{fields: Object.keys(userUpdate) });
                return { success: true, data: updatedUser };
            }
            catch (err) {
                return { success: false, data: err};   
            }
          
        }
        else {
            return { success: true, data: "User Not Found"};
        }
    }
    catch (err) {
        return { success: false, data: err};
    }
}

const destroyUser = async (userId) => {
    try {
      const user = await UserModel.findByPk(userId);
      if(user) {
        await user.destroy();
        return {success :true, data: "Resource Deleted"};
      }
      else {
          return {success: false, data: "User Not Found"};
      }
    } 
    catch (err) {
      return { success: false, data: err };
    }
}

const loginUser = async (email,password) => {
    try {
        let data = await UserModel.findOne({
            where: {email: email}
        });
        if(data) {
            valid = await passwordValidity(password,data.password);
            if(!valid) {
                return {statusCode: statusCodes.UNAUTHORIZED, success:false, data: "Email And Password Doesnot Match."};    
            } 
            else {   
                if(data.userType == 1) {
                    console.log(data.id);
                    console.log("Patient");
                     data = await PatientService.getPatientByUserId(data.id);
                    //  console.log(data.data)
                     return {statusCode: data.statusCode, success:data.success, data: data.data};
                }
                else if(data.userType == 2) {
                     data = await DoctorService.getDoctorByUserId(data.id);
                     return {statusCode: data.statusCode, success:data.success, data: data.data};
                }
                else {
                    return {statusCode: statusCodes.UNAUTHORIZED, success:false, data: "User Type is not valid."};
                }
            }
        }
        else {
            return {statusCode: statusCodes.UNAUTHORIZED, success:false, data: "Email Address Doesnot exists"};
        }
    }
    catch(err) {
        return { statusCode: statusCodes.BAD_REQUEST,success: false, data: err};
    }
}

module.exports = {
    createUser,
    listUsers,
    getUserById,
    updateUser,
    destroyUser,
    loginUser
}