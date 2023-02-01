const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

require("dotenv-flow").config();

//routes

const port = process.env.PORT || 8000;

app.listen(port, function(){
    console.log("Aaargh!: " + port)
});

module.exports = app;