const UserModel = require('./../models/user');

const createUser = async (user) => {
    try {
        const newUser = await UserModel.create({
            ...user
        });
        return {success: true, user: newUser};
    }   
    catch (err) {
        return {success: false, err: err};
    }
}

const listUsers = async () => {
    
    try{
        const users = await UserModel.findAll()
        return { success:true, data: users };
    }
    catch(err) {
        return { success: false, err: err };
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
        return { success: false, err: err};
    }
}

const updateUser = async (userId) => {
    try {
        const user = await UserModel.findByPk(id)
        if(user) {
           const updatedUser = await user.update({ id: req.body.id });
           return { success: true, data: updatedUser };
        }
        else {
            return { success: true, data: "User Not Found"};
        }
    }
    catch (err) {
        return { success: false, err: err};
    }
}


const destroyUser = async (userId) => {
    try {
      const user = await UserModel.findByPk(userId);
      if(user) {
        await user.destroy();
        return {success:true, data: null};
      }
    } 
    catch (err) {
      return { success: false, err: err };
    }
}

module.exports = {
    createUser,
    listUsers,
    getUserById,
    updateUser,
    destroyUser
}