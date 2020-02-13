module.exports = (app) => {
    app.use("/api/v1/user", require('./user'));
    app.use("/api/v1/patient", require('./patient'));
    app.use("/api/v1/doctor", require('./doctor'));
    app.use("/api/v1/appointment", require('./appointment'));
    app.use("/api/v1/review", require('./review'));
    app.use("/api/v1/doctor-schedule", require('./doctorSchedule'));
    app.use("/api/v1/disease", require('./disease'));
}