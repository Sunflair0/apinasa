import { createSlice } from "@reduxjs/toolkit/";

export const albumSlice = createSlice({
  name: "album",
  initialState: [],
  reducers: {
    clear: () => [],
    add: (state, action) => [...state, action.payload],
    remove: (state, action) =>
      state.map((val) => val.liked_id !== action.payload),
  },
});

export const { add, remove, clear, entry, isLiked } = albumSlice.actions;

export default albumSlice.reducer;