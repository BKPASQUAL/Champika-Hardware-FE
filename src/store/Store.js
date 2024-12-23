import { configureStore } from "@reduxjs/toolkit";
import api from "./api/api";
import { supliersApi } from "./api/supplier";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [supliersApi.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware, supliersApi.middleware),
});
