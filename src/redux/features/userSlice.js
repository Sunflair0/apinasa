import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    logout: (state) => null,
    login: (state, action) => action.payload,
  },
});

export const { logout, login } = userSlice.actions;

export default userSlice.reducer;