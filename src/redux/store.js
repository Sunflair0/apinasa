import { configureStore } from "@reduxjs/toolkit";
import albumReducer from "./features/albumSlice";
import userReducer from "./features/userSlice";

export default configureStore({
  reducer: {
    album: albumReducer,
    user: userReducer,    
  },
});