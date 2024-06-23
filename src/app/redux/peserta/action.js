import { REQUEST } from "@presensi/app/_globals/config/axios.config";
import { API_COLLECTION } from "@presensi/app/_globals/constant/api-collection.constant";
import { createAsyncThunk } from "@reduxjs/toolkit";

// REQUEST LOGIN
export const REQUEST_PESERTA_LIST = createAsyncThunk(
  "peserta/list",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await REQUEST.get(API_COLLECTION.PESERTA.LIST, payload);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
