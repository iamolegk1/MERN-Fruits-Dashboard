import axios from "axios";

export const getFruits = async () => {
  const fruits = await axios.get("/api/fruits");
  return fruits.data;
};
