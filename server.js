const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");

//App setup
const app = express();
const server = http.Server(app);
server.listen(3000);

//Json parser
app.use(bodyParser.json());

//Api
const productRoutes = require("./api/router"); //module.exports
app.use("/router", productRoutes);

//Static files
app.use("/public", express.static("public"));
app.use(express.static("views"));
