import axios from "axios";

export const getFruits = async () => {
  const fruits = await axios.get("/api/fruits");
  return fruits.data;
};

export const getFruit = async (id) => {
  const fruit = await axios.get(`/api/fruits/${id}`);
  return fruit.data;
};

export const postSellFruit = async (fruitData) => {
  const fruit = await axios.post(`/api/fruits`, fruitData);
  return fruit.data;
};
