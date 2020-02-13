const User = require("./user");
const DoctorController = require('./doctor');
const PatientController = require('./patient');
const AppointmentController = require('./appointment');
const AssessmentController = require('./assessment');
const DiseaseController = require("./disease");
const DoctorScheduleController = require("./doctorSchedule");
const ReviewController = require("./review");
const SymptomController = require('./symptom');
module.exports = {
    User,
    DoctorController,
    PatientController,
    AppointmentController,
    AssessmentController,
    DiseaseController,
    DoctorScheduleController,
    ReviewController,
    SymptomController
}