const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;

// for parsing application/json
app.use(express.json());

//for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//path to image folder
app.use("/static", express.static(__dirname + "/assets"));

//redirect to fruit file
app.use("/api/fruits", require("./routes/fruits"));

mongoose.connect("mongodb://localhost:27017").then(() => {
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
});
