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

// POST fruit
// fruitImage: `http://localhost:${process.env.PORT}/static/${req.file.filename}`,
const sendFruit = async (req, res) => {
  const { name, description, price } = req.body;

  try {
    const fruit = await Fruits.create({
      name,
      description,
      price,
    });

    res.status(200).json(fruit);
  } catch (error) {
    res.status(400).json({ error });
  }
};

module.exports = {
  getFruits,
  sendFruit,
};
