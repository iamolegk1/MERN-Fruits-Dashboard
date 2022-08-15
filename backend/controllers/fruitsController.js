const Fruits = require("../models/fruitModel");

//GET all fruits
const getFruits = async (req, res) => {
  try {
    const fruits = await Fruits.find({}).sort({ createdAt: -1 });

    res.status(200).json(fruits);
  } catch {
    res.status(500).json({ message: "Failed to get fruit list" });
  }
};

//GET one fruit
const getFruit = async (req, res) => {
  try {
    const fruit = await Fruits.find({ _id: req.params.id });

    res.status(200).json(fruit);
  } catch {
    res.status(400).json({ message: "Failed to get fruit" });
  }
};

//POST fruit
const sendFruit = async (req, res) => {
  const errors = {};

  if (!req.body.name) {
    errors.name = { message: "Please enter name" };
  }

  if (!req.body.description) {
    errors.description = { message: "Please enter description" };
  }

  if (!req.body.price) {
    errors.price = { message: "Please enter price" };
  }

  if (!req.file) {
    errors.image = { message: "Please add an image" };
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json(errors);
  }

  try {
    const { name, description, price } = req.body;

    const fruit = await Fruits.create({
      name,
      description,
      price,
      image: `http://localhost:${process.env.PORT}/static/${req.file.filename}`,
    });

    res.status(201).json(fruit);
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  getFruits,
  getFruit,
  sendFruit,
};
