const express = require("express");
const indexController = require("./controllers/index.controller")
const productController = require("./controllers/product.controller")

const app = express();
app.use(express.json());

app.set("view engine", "ejs"); 
app.use(express.static("public"));

app.use("", indexController);
app.use("", productController);

module.exports = app;
