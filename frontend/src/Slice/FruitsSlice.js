import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getFruits as getServerFruits } from "../services";

export const getFruits = createAsyncThunk(
  "fruits/getFruits",
  async (_, thunkAPI) => {
    try {
      return await getServerFruits();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  fruitsList: [],
  error: false,
  loading: false,
  mssg: "",
};

const fruitsSlice = createSlice({
  name: "fruits",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getFruits.pending, (state) => {
        state.loading = true;
      })
      .addCase(getFruits.fulfilled, (state, action) => {
        state.loading = false;
        state.fruitsList = action.payload;
      })
      .addCase(getFruits.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.mssg = action.payload.mssg;
        state.fruitsList = [];
      });
  },
});

export default fruitsSlice.reducer;
