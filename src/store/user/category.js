import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const categorySlice = createSlice({
  name: "category",

  initialState: { data: [], status: STATUSES.IDLE },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategory.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchCategory.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export const fetchCategory = createAsyncThunk("/category", async () => {
  try {
    const response = await axios.get("http://localhost:5000/category/");

    return response.data;
  } catch (error) {
    console.error(error);
  }
});
export const { setCategoryHandler } = categorySlice.actions;
export default categorySlice.reducer;
