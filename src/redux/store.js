import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import albumReducer from "./features/albumSlice";
import bankReducer from "./features/bankSlice";
import profileReducer from "./features/profileSlice";
import transactionsReducer from "./features/transactionsSlice";
import testimonialsReducer from "./features/testimonialsSlice";
import venturesReducer from "./features/venturesSlice";
import userReducer from "./features/userSlice";
import { nasaApi } from "./features/nasaSlice";

export const store = configureStore({
  reducer: {
    album: albumReducer,
    bank: bankReducer,
    profile: profileReducer,
    purchases: transactionsReducer,
    testimonials: testimonialsReducer,
    ventures: venturesReducer,
    user: userReducer,
    [nasaApi.reducerPath]: nasaApi.reducer,
  },
middleware: (getDefaultMiddleware) => 
getDefaultMiddleware().concat(nasaApi.middleware)
});

setupListeners(store.dispatch);