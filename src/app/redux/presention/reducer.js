import { createReducer } from "@reduxjs/toolkit";
import { REQUEST_PRESENTION } from "./action";

const initialState = {
  data: null,
  pending: false,
  error: null,
  success: false,
  successMessage: null,
};

export const PRESENTION_REDUCER = createReducer(initialState, (builder) => {
  builder
    // SIGN IN REDUCER
    .addCase(REQUEST_PRESENTION.pending, (state) => {
      state.pending = true;
    })
    .addCase(REQUEST_PRESENTION.fulfilled, (state, { payload }) => {
      state.pending = false;
      state.success = true;
      state.data = payload;
    })
    .addCase(REQUEST_PRESENTION.rejected, (state, { payload }) => {
      state.pending = false;
      state.error = payload;
    });
});
