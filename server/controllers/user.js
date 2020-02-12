const UserService = require("./../services/user");
const UserValidation = require("./../validation").User;

const create = async (req,res) => {
    const { err } = UserValidation(req.body, false);
    if(err) {
        return res
        .status(500)
        .json({ success: false, err: err.details[0].message });
    }
    const { success, data } =  await UserService.createUser(req.body);
    return res.json({success, data});
}

const list = async(req,res) => {
    const { success, data } = await UserService.listUsers();
    return res.json({ success,data });
} 


const retrieve = async (req,res) => {
    const userId = req.params.id;
    const {success, user} = await UserService.getUserById(userId);
    return res.json({ success, user} );
}

const update = async (req, res) => {
    const userId = req.params.id;
    const { success, data } = await UserService.updateUser(userId);
    return res.json( {success,user } );
}

const destroy = async (req, res) => {
    const userId = req.params.id;
    const { success, data } = await UserService.destroyUser(userId);
    return res.json({succes,data}); 
}


module.exports = {
create,
retrieve,
list,
destroy,
update
}