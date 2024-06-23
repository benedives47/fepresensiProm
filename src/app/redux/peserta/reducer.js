import { createReducer } from "@reduxjs/toolkit";
import { REQUEST_PESERTA_LIST } from "./action";

const initialState = {
  list: [],
  pending: false,
  error: null,
  success: false,
};

export const PESERTA_REDUCER = createReducer(initialState, (builder) => {
  builder
    // SIGN IN REDUCER
    .addCase(REQUEST_PESERTA_LIST.pending, (state) => {
      state.pending = true;
      state.success = false;
    })
    .addCase(REQUEST_PESERTA_LIST.fulfilled, (state, { payload }) => {
      state.pending = false;
      state.success = true;
      state.list = payload;
    })
    .addCase(REQUEST_PESERTA_LIST.rejected, (state, { payload }) => {
      state.pending = false;
      state.error = payload;
    });
});
