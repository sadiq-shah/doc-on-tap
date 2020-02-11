const express = require("express");
const app = express();
const logger = require("morgan");
const bodyParser = require("body-parser");

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));

require('./server/api/routes')(app);

module.exports = app;