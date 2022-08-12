const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//described what the fruit looks like in the database
// fruitImage: {
//   type: String,
//   required: true,
// },
const fruitSchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
});

module.exports = mongoose.model("Fruits", fruitSchema);
