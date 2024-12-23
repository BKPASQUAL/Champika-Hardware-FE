import { configureStore } from "@reduxjs/toolkit";
import api from "./api/api";
import { supliersApi } from "./api/supplier";
import { productApi } from "./api/productApi";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [supliersApi.reducerPath]: supliersApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      api.middleware,
      supliersApi.middleware,
      productApi.middleware
    ),
});
