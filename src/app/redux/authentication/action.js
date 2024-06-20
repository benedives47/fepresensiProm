import { REQUEST } from "@presensi/app/_globals/config/axios.config";
import { API_COLLECTION } from "@presensi/app/_globals/constant/api-collection.constant";
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

// REQUEST LOGIN
export const REQUEST_SIGN_IN = createAsyncThunk(
  "authentication/login",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await REQUEST.post(API_COLLECTION.AUTH.LOGIN, payload);
      console.log("response", response);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const REQUEST_RESET_AUTH = createAction("authentication/reset");
