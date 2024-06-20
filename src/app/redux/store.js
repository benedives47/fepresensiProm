import { configureStore } from "@reduxjs/toolkit";
import { AUTH_REDUCER } from "./authentication/reducer";

export const store = configureStore({
  reducer: {
    authentication: AUTH_REDUCER,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
