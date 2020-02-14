const UserService = require("./../services").UserService;
const UserValidation = require("./../validation").UserValidation;

const create = async (req,res) => {
    const { err } = UserValidation(req.body, false);
    if(err) {
        return res  
        .status(500)
        .json({ success: false, err: err.details[0].message });
    }
    try {
        const { success, data } =  await UserService.createUser(req.body);
        return res.json({success, data});
    }
    catch(err) {
        return res.status(500).json({success: false, err: err });
    } 
}

const list = async(req,res) => {
    try {
        const { success, data } = await UserService.listUsers();
        return res.json({ success,data });
    }
    catch(err) {
        return res.status(500).json({success: false, err:err });
    } 
} 


const retrieve = async (req,res) => {
    const userId = req.params.id;
    try {
        const {success, data} = await UserService.getUserById(userId);
        return res.json({ success, data} );    
    }
    catch(err) {
        return res.status(500).json({success: false, err:err });
    }
}

const update = async (req, res) => {
    const { err } = UserValidation(req.body, true);
    if(err) {
        return res
        .status(500)
        .json({ success: false, err: err.details[0].message });
    }
    const user = req.body;
    const userId = req.params.id;
    try {
        const { success, data } = await UserService.updateUser(userId,user);
        return res.json( {success, data } );
    }
    catch(err) {
        return res.status(500).json({success: false, err:err });
    }
}

const destroy = async (req, res) => {
    const userId = req.params.id;
    try {
        const {success, data } = await UserService.destroyUser(userId);
        return res.json({success,data});     
    }
    catch(err) {
        return res.status(500).json({success: false, err:err });
    }
}

module.exports = {
    create,
    retrieve,
    list,
    destroy,
    update
}