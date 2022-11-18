import { createSlice } from "@reduxjs/toolkit";



export const venturesSlice = createSlice({
  name: "venture_location",
  initialState: null,
  reducers: {
    buy: (state, action) => action.payload,
    sell: (state, action) => action.payload,
   clear: () => [],
  },
});

export const { buy, sell, clear } = venturesSlice.actions;

export default venturesSlice.reducer;