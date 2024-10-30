import { configureStore } from "@reduxjs/toolkit";
import api from "./api/api";
import { categoriesApi } from "./api/categerieApi";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [categoriesApi.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware, categoriesApi.middleware),
});
