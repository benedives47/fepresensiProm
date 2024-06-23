import { createSelector } from "@reduxjs/toolkit";

export const PESERTA_SELECTOR = (state) => state.peserta;

export const PESERTA_SELECTOR_COLLECTION = createSelector(
  PESERTA_SELECTOR,
  (state) => state,
  {
    devModeChecks: { identityFunctionCheck: "never" },
  }
);
