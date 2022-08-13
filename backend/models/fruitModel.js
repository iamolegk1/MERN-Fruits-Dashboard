const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//described what the fruit looks like in the database
const fruitSchema = new Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Fruits", fruitSchema);
