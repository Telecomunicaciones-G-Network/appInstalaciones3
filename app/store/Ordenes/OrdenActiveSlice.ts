import { createSlice } from "@reduxjs/toolkit";

export interface OrdenActiveSliceInterface {
  contract: number;
  latitude: number;
  longitude: number;
  order: number;
  idAllow: number;
}

const initialStateOrden: OrdenActiveSliceInterface = {
  contract: 0,
  latitude: 0,
  longitude: 0,
  order: 0,
  idAllow: 0,
};

export const ordenActiveSlice = createSlice({
  name: "ordenActive",
  initialState: initialStateOrden,
  reducers: {
    setActiveOrden(state, { payload }) {
      state.contract = payload.contract;
      state.latitude = payload.latitude;
      state.longitude = payload.longitude;
      state.order = payload.order;
    },
    setAllow(state, { payload }) {
      state.idAllow = payload;
      
    },
  },
});

export const { setActiveOrden,setAllow } = ordenActiveSlice.actions;
