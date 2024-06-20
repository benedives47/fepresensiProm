import { configureStore } from "@reduxjs/toolkit";
import { AUTH_REDUCER } from "./authentication/reducer";
import { PRESENTION_REDUCER } from "./presention";

export const store = configureStore({
  reducer: {
    authentication: AUTH_REDUCER,
    presention: PRESENTION_REDUCER,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
