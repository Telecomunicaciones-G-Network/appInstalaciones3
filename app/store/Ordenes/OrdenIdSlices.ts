import { createSlice } from "@reduxjs/toolkit";
import { fetchIdOrden} from "./Thunks";
import {
  City,
  Client,
  Contract,
  Group,
  ImageOrder,
  Municipality,
  OrdenId,
  OrderDetail,
  PaymentDetail,
  Sector,
  State,
  Zone,
} from "../../core/Interfaces/OrdenIdInterface";

export interface OrdenIdSliceInterface {
  isLoading: boolean;
  ordenID: OrdenId | false;
  id: number;
  
}

export const initialStateOrdenId: OrdenIdSliceInterface = {
  isLoading: false,
  ordenID: false,
  id:0
};

export const ordenIdSlice = createSlice({
  name: "ordenId",
  initialState: initialStateOrdenId,
  reducers: {
    setOrdenId(states,{payload}){
      states.id = payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchIdOrden.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchIdOrden.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.ordenID = payload;
        state.id = payload.id  
      });
  },
});

export const {setOrdenId} = ordenIdSlice.actions;

