const AssessmentService = require("./../services").AssessmentService;
const AssessmentValidation = require("./../validation").AssessmentValidation;

const create = async (req,res) => {
    const { err } = AssessmentValidation(req.body, false);
    if(err) {
        return res  
        .status(500)
        .json({ success: false, err: err.details[0].message });
    }
    try {
        const {statusCode,  success, data } =  await AssessmentService.createAssessment(req.body);
        return res.status(statusCode).json({success, data});
    }
    catch(err) {
        return res.status(500).json({success: false, err: err });
    } 
}

const list = async(req,res) => {
    try {
        console.log("Listing Conditions");
        const {statusCode, success, data } = await AssessmentService.listAssessments();
        return res.status(statusCode).json({ success,data });
    }
    catch(err) {
        return res.status(500).json({success: false, err:err });
    } 
} 

const retrieve = async (req,res) => {
    const assessmentId = req.params.id;
    try {
        
        const {statusCode, success, data} = await AssessmentService.getAssessmentById(assessmentId);
        return res.status(statusCode).json({success, data} );    
    }
    catch(err) {
        return res.status(500).json({success: false, err:err });
    }
}

const update = async (req, res) => {
    const { err } = AssessmentValidation(req.body, true);
    if(err) {
        return res
        .status(500)
        .json({ success: false, err: err.details[0].message });
    }
    const assessment = req.body;
    const assessmentId = req.params.id;
    try {
        const {statusCode, success, data } = await AssessmentService.updateAssessment(assessmentId,assessment);
        return res.status(statusCode).json( {success, data } );
    }
    catch(err) {
        return res.status(500).json({success: false, err:err });
    }
}

const destroy = async (req, res) => {
    const assessmentId = req.params.id;
    try {
        const {statusCode, success, data } = await AssessmentService.destroyAssessment(assessmentId);
        return res.status(statusCode).json({success,data});     
    }
    catch(err) {
        return res.status(500).json({success: false, err:err });
    }
}

module.exports = {
    create,
    retrieve,
    list,
    update,
    destroy
}