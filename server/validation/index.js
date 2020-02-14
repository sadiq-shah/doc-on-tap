const UserValidation = require("./user");
const PatientValidation = require('./patient');
const DoctorValidation = require('./doctor');
const AppointmentValidation = require('./appointment');
const DoctorScheduleValidation = require('./doctorSchedule');
const ReviewValidation = require("./review");
const DiseaseValidation = require("./disease");
const AssessmentValidation = require("./assessment");

module.exports = {
    UserValidation,
    PatientValidation,
    DoctorValidation,
    AppointmentValidation,
    DoctorScheduleValidation,
    ReviewValidation,
    DiseaseValidation,
    AssessmentValidation
}