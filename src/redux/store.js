import { configureStore } from "@reduxjs/toolkit";
import albumReducer from "./features/albumSlice";
import userReducer from "./features/userSlice";

export const store = configureStore({
  reducer: {
    album: albumReducer,
    user: userReducer,    
  },
});