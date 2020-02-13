const AppointmentService = require("./../services").AppointmentService;
const AppointmentValidation = require("./../validation").AppointmentValidation;

const create = async (req,res) => {
    const { err } = AppointmentValidation(req.body, false);
    if(err) {
        return res  
        .status(500)
        .json({ success: false, err: err.details[0].message });
    }
    try {
        const { success, data } =  await AppointmentService.createAppointment(req.body);
        return res.json({success, data});
    }
    catch(err) {
        return res.status(500).json({success: false, err: err });
    } 
}

const list = async (req,res) => {
    try {
        const { success, data } = await AppointmentService.listAppointments();
        return res.json({ success,data });
    }
    catch(err) {
        return res.status(500).json({success: false, err:err });
    } 
} 

const retrieve = async (req,res) => {
    const appointmentId = req.params.id;
    try {
        const {success, data} = await AppointmentService.getAppointmentById(appointmentId);
        return res.json({ success, data} );    
    }
    catch(err) {
        return res.status(500).json({success: false, err:err });
    }
}

const update = async (req, res) => {
    const { err } = AppointmentValidation(req.body, true);
    if(err) {
        return res
        .status(500)
        .json({ success: false, err: err.details[0].message });
    }
    const appointment = req.body;
    const appointmentId = req.params.id;
    try {
        const { success, data } = await AppointmentService.updateAppointment(appointmentId,appointment);
        return res.json( {success, data } );
    }
    catch(err) {
        return res.status(500).json({success: false, err:err });
    }
}

const destroy = async (req, res) => {
    const appointmentId = req.params.id;
    try {
        const {success, data } = await AppointmentService.destroyAppointment(appointmentId);
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