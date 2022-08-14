import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getFruit as getServerFruit } from "../services";

export const getFruit = createAsyncThunk(
  "fruit/getFruit",
  async (id, thunkAPI) => {
    try {
      return await getServerFruit(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  fruit: [],
  error: false,
  loading: false,
  mssg: "",
};

const fruitSlice = createSlice({
  name: "fruit",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getFruit.pending, (state) => {
        state.loading = true;
      })
      .addCase(getFruit.fulfilled, (state, action) => {
        state.loading = false;
        state.fruit = action.payload[0];
      })
      .addCase(getFruit.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.mssg = action.payload.mssg;
        state.fruit = [];
      });
  },
});

export default fruitSlice.reducer;
