import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import authReducer from "../../redux/features/auth/authSlice"
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import albumReducer from "../../redux/features/albumSlice";
import bankReducer from "../../redux/features/bankSlice";
import profileReducer from "../../redux/features/profileSlice";
import transactionsReducer from "../../redux/features/transactionsSlice";
// import testimonialsReducer from "../../redux/features/salutesSlice";
import venturesReducer from "../../redux/features/venturesSlice";
import { nasaApi } from "../../redux/features/nasaSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    album: albumReducer,
    bank: bankReducer,
    profile: profileReducer,
    purchases: transactionsReducer,
    // testimonials: testimonialsReducer,
    ventures: venturesReducer,
    [nasaApi.reducerPath]: nasaApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
///PRODUCTION =FALSE
  devTools: true

});

setupListeners(store.dispatch);