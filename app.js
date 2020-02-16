const express = require("express");
const app = express();
const Cors = require("cors");
const logger = require("morgan");
const bodyParser = require("body-parser");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "Doc On Tap Api",
            description: "Doc On Tap API",
            contact: {
                name: "Sadiq Shah Yushi Bazukay"
            },
            servers: ["https://localhost:5000"]
        }
    },
    //
    apis: ["./server/api/routes/*.js"]
}
const swaggerSpec = swaggerJsDoc(swaggerOptions);
app.get('/swagger.json', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});


app.use("/api-docs", swaggerUI.serve,swaggerUI.setup(swaggerSpec));
app.use(Cors());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));
require('./server/api/routes')(app);

module.exports = app;