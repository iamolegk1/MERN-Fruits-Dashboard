import axios from "axios";

export const getFruits = async () => {
  const fruits = await axios.get("/api/fruits");
  return fruits.data;
};

export const getFruit = async (id) => {
  const fruit = await axios.get(`/api/fruits/${id}`);
  return fruit.data;
};
