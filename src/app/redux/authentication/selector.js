import { createSelector } from "@reduxjs/toolkit";

export const AUTH_SELECTOR = (state) => state.authentication;

export const AUTH_SELECTOR_COLLECTION = createSelector(
  AUTH_SELECTOR,
  (state) => state,
  {
    devModeChecks: { identityFunctionCheck: "never" },
  }
);
