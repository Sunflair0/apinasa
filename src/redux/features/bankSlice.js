import { createSlice } from "@reduxjs/toolkit";

export const bankSlice = createSlice({
  name: "location",
  initialState: [],
  reducers: {
    buy: (state, action) => action.payload,
    sell: (state, action) => action.payload,
   clear: () => [],
  },
});

export const { buy, sell, clear } = bankSlice.actions;

export default bankSlice.reducer;