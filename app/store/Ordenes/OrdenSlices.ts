import { createSlice } from "@reduxjs/toolkit";
import { fetchOrdenes } from "./Thunks";
import { Ordenes } from "../../core/Interfaces/OrdenesInterface";

export interface OrdenSliceInterface {
  isLoading: boolean;
  ordenes: Ordenes[];
}

export const initialStateOrden: OrdenSliceInterface = {
  isLoading: false,
  ordenes:[]
};

export const ordenSlice = createSlice({
  name: "orden",
  initialState: initialStateOrden,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOrdenes.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchOrdenes.fulfilled, (state, {payload}) => {
        state.isLoading = false;
         state.ordenes=payload.results
        // state.count=payload.count
        
    });
  },
});

export const {} = ordenSlice.actions;
