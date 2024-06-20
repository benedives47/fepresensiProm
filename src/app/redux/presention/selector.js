import { createSelector } from "@reduxjs/toolkit";

export const PRESENTION_SELECTOR = (state) => state.presention;

export const PRESENTION_SELECTOR_COLLECTION = createSelector(
  PRESENTION_SELECTOR,
  (state) => state,
  {
    devModeChecks: { identityFunctionCheck: "never" },
  }
);
