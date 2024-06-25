import { createSlice } from "@reduxjs/toolkit";

const fecha = new Date();

const formate = `${fecha.getFullYear()}-${
  fecha.getMonth() + 1
}-${fecha.getDate()}`;


export interface CoreSliceInterface {
  desde: string;
  hasta: string;
  type: any;
  search: any;
}

const initialCoreSlice = {
  desde: formate,
  hasta: formate,
  type: false,
  search: false,
};

export const coreSlice = createSlice({
  name: "coreSlice",
  initialState: initialCoreSlice,
  reducers: {
    setFechaCore(state, { payload }) {
      state.desde = payload.since;
      state.hasta = payload.until;
    },

    resetDate(state){
      state.desde = initialCoreSlice.desde;
      state.hasta = initialCoreSlice.hasta;
    },
    setType(state, { payload }) {
      state.type = payload;
    },
  },
});

export const { setFechaCore,  setType,resetDate } = coreSlice.actions;
