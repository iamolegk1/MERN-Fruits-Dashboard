require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const fruitsRoutes = require("./routes/fruits");

//express app
const app = express();

// middleware for parsing application/json
app.use(express.json());

//for parsing application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: true }));

//path to image folder
// app.use("/static", express.static(__dirname + "/assets"));

//redirect to fruit file
app.use("/api/fruits", fruitsRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`connected to db & listen on port 4000`);
    });
  })
  .catch((e) => console.log(e));
