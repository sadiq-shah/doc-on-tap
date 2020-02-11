module.exports = (app) => {
    console.log("entered")
    app.use("/api/v1/user", require('./user'));
}