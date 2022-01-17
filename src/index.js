const express = require("express");
const indexController = require("./controllers/index.controller")
const app = express();
app.use(express.json());

app.set("view engine", "ejs"); 
app.use(express.static("public"));

app.use("", indexController);

module.exports = app;
