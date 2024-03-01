import { createSlice } from "@reduxjs/toolkit";

const fecha = new Date();

const formate = `${fecha.getFullYear()}-${
  fecha.getMonth() + 1
}-${fecha.getDate()}`;
console.log(formate);

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
    
    setType(state, { payload }) {
      state.type = payload;
    },
  },
});

export const { setFechaCore,  setType } = coreSlice.actions;
