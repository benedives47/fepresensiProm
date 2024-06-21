import { createReducer } from "@reduxjs/toolkit";
import { REQUEST_SIGN_IN } from "./action";

const initialState = {
  data: null,
  pending: false,
  error: null,
  success: false,
};

export const AUTH_REDUCER = createReducer(initialState, (builder) => {
  builder
    // SIGN IN REDUCER
    .addCase(REQUEST_SIGN_IN.pending, (state) => {
      state.pending = true;
      state.success = false;
    })
    .addCase(REQUEST_SIGN_IN.fulfilled, (state, { payload }) => {
      state.pending = false;
      state.success = true;
      state.data = payload;
    })
    .addCase(REQUEST_SIGN_IN.rejected, (state, { payload }) => {
      state.pending = false;
      state.error = payload;
    });
});
