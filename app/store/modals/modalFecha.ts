import { createSlice } from "@reduxjs/toolkit";

export interface ModalFechaInterface {
  isOpen: boolean;
}

const initialState: ModalFechaInterface = {
  isOpen: false,
};

export const modalFechaSlice = createSlice({
  name: "modalFecha",
  initialState,
  reducers: {
    mostrarModalFecha(state) {
      state.isOpen = true;
    },
    ocultarModalFecha(state) {
      state.isOpen = false;
    },
  },
});

export const { mostrarModalFecha, ocultarModalFecha } = modalFechaSlice.actions;
