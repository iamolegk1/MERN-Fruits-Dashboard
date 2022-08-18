import { configureStore } from "@reduxjs/toolkit";

import fruits from "../Slice/FruitsSlice";
import fruit from "../Slice/FruitSlice";

const store = configureStore({
  reducer: { fruits, fruit },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
