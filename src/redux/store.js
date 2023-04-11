import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from ".././app/api/apiSlice";
import authReducer from "./features/auth/authSlice"
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import albumReducer from "./features/albumSlice";
import bankReducer from "./features/bankSlice";
import profileReducer from "./features/profileSlice";
import transactionsReducer from "./features/transactionsSlice";
import salutesReducer from "./features/salutesSlice";
import venturesReducer from "./features/venturesSlice";
import { nasaApi } from "./features/nasaSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    album: albumReducer,
    bank: bankReducer,
    profile: profileReducer,
    purchases: transactionsReducer,
    salutes: salutesReducer,
    ventures: venturesReducer,
    [nasaApi.reducerPath]: nasaApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
///PRODUCTION =FALSE
  devTools: true
});

setupListeners(store.dispatch);