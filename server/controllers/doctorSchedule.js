const DoctorScheduleService = require("./../services").DoctorSchedule;
const DoctorScheduleValidation = require("./../validation").DoctorSchedule;

const create = async (req,res) => {
    const { err } = DoctorScheduleValidation(req.body, false);
    if(err) {
        return res  
        .status(500)
        .json({ success: false, err: err.details[0].message });
    }
    try {
        const { success, data } =  await DoctorScheduleService.createSchedule(req.body);
        return res.json({success, data});
    }
    catch(err) {
        return res.status(500).json({success: false, err: err });
    } 
}

const list = async(req,res) => {
    try {
        const { success, data } = await DoctorScheduleService.listSchedules();
        return res.json({ success,data });
    }
    catch(err) {
        return res.status(500).json({success: false, err:err });
    } 
} 

const retrieve = async (req,res) => {
    const doctorScheduleId = req.params.id;
    try {
        const {success, data} = await DoctorScheduleService.getScheduleById(doctorScheduleId);
        return res.json({ success, data} );    
    }
    catch(err) {
        return res.status(500).json({success: false, err:err });
    }
}

const update = async (req, res) => {
    const { err } = DoctorScheduleValidation(req.body, true);
    if(err) {
        return res
        .status(500)
        .json({ success: false, err: err.details[0].message });
    }
    const doctorSchedule = req.body;
    const doctorScheduleId = req.params.id;
    try {
        const { success, data } = await DoctorScheduleService.updateSchedule(doctorScheduleId,doctorSchedule);
        return res.json( {success, data } );
    }
    catch(err) {
        return res.status(500).json({success: false, err:err });
    }
}

const destroy = async (req, res) => {
    const doctorScheduleId = req.params.id;
    try {
        const {success, data } = await DoctorScheduleService.destroySchedule(doctorScheduleId);
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