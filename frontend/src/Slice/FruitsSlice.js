import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fruits: [],
  error: false,
  loading: false,
  mssg: "",
};

const fruitsSlice = createSlice({
  name: "fruits",
  initialState,
});

export default fruitsSlice.reducer;
