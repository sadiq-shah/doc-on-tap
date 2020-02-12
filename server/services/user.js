const UserModel = require('./../models').User;

const createUser = async (user) => {
    try {
        const newUser = await UserModel.create({
            ...user
        });
        return {success: true, data: newUser};
    }   
    catch (err) {
        return {success: false, data: err};
    }
}

const listUsers = async () => {
    console.log("User Service");   
    try{
        const users = await UserModel.findAll();
        console.log("Finding All");
        return { success:true, data: users };
    }
    catch(err) {
        return { success: false, data: err };
    }

}


const getUserById = async (userId) => {
    try {
        const user = await UserModel.findByPk(userId);
        if(user) {
            return {success:true, data: user};
        }
        else {
            return {success:true, message: "Not FOund"}
        }

    }
    catch(err) {
        console.log("Error",err);
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

module.exports = {
    createUser,
    listUsers,
    getUserById,
    updateUser,
    destroyUser
}