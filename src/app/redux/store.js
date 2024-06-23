import { configureStore } from "@reduxjs/toolkit";
import { AUTH_REDUCER } from "./authentication/reducer";
import { PRESENTION_REDUCER } from "./presention";
import { PESERTA_REDUCER } from "./peserta";

export const store = configureStore({
  reducer: {
    peserta: PESERTA_REDUCER,
    authentication: AUTH_REDUCER,
    presention: PRESENTION_REDUCER,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
