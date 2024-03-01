import { createSlice } from "@reduxjs/toolkit";
import { fetchNap_box } from "./Thunks";
import { Nap_box } from "../../core/Interfaces/Nap_box";

export interface NapsliceInterface {
  isLoading: boolean;
  nap_box: Nap_box | false;
}

export const initialNapSlice: NapsliceInterface = {
  isLoading: false,
  nap_box: false,
};

export const Napslice = createSlice({
  name: "napSlice",
  initialState: initialNapSlice,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNap_box.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchNap_box.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.nap_box = payload;
      });
  },
});

export const {} = Napslice.actions;
