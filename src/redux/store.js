import { configureStore } from "@reduxjs/toolkit";
import albumReducer from "./features/albumSlice";
import bankReducer from "./features/bankSlice";
import profileReducer from "./features/profileSlice";
import purchasesReducer from "./features/purchasesSlice";
import testimonialsReducer from "./features/testimonialsSlice";
import venturesReducer from "./features/venturesSlice";
import userReducer from "./features/userSlice";

export default configureStore({
  reducer: {
    album: albumReducer,
    bank: bankReducer,
    profile: profileReducer,
    purchases: purchasesReducer,
    testimonials: testimonialsReducer,
    ventures: venturesReducer,
    user: userReducer,
  },
});