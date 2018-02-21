let express = require("express");
let bodyParser = require("body-parser");
let router = require("./routers/router");
let cors = require("cors");

// creating the express instance
let app = express();

// adding middlewares 
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors()); // allow CSFR

app.use(bodyParser.json());

app.use("/",router);


app.listen(8080);