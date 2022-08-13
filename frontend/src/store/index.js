import { configureStore } from "@reduxjs/toolkit";
import fruits from "../Slice/FruitsSlice";

const store = configureStore({
  reducer: { fruits },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
