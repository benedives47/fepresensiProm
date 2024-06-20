import { REQUEST } from "@presensi/app/_globals/config/axios.config";
import { API_COLLECTION } from "@presensi/app/_globals/constant/api-collection.constant";
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

// REQUEST UPDATE PRESENTION
export const REQUEST_PRESENTION = createAsyncThunk(
  "presention/update",
  async (params, { rejectWithValue }) => {
    try {
      const response = await REQUEST.put(API_COLLECTION.PESERTA.UPDATE, null, {
        params,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const REQUEST_RESET_AUTH = createAction("authentication/reset");
