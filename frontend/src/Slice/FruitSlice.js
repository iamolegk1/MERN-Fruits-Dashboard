import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getFruit as getServerFruit, postSellFruit } from "../services";

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

export const sellFruit = createAsyncThunk(
  "fruit/sellFruit",
  async (fruitData, thunkAPI) => {
    try {
      return await postSellFruit(fruitData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  fruit: [],
  error: false,
  errors: null,
  loading: false,
  mssg: "",
};

const fruitSlice = createSlice({
  name: "fruit",
  initialState,
  reducers: {
    resetErrors: (state) => {
      state.errors = null;
    },
  },
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
      })
      .addCase(sellFruit.pending, (state) => {
        state.loading = true;
        state.errors = null;
      })
      .addCase(sellFruit.fulfilled, (state) => {
        state.loading = false;
        state.errors = null;
      })
      .addCase(sellFruit.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.errors = action.payload;
      });
  },
});

export const { resetErrors } = fruitSlice.actions;
export default fruitSlice.reducer;
