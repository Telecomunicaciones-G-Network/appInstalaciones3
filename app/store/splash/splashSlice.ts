import { createSlice } from "@reduxjs/toolkit";

export interface SplashInterface {
  isOpen: boolean;
}

const initialState: SplashInterface = {
  isOpen: false,
};

export const splashSlice = createSlice({
  name: "splash",
  initialState,
  reducers: {
    mostrarCargando(state) {
      state.isOpen = true;
    },
    toggleCargandoParam(state,{payload}) {
      state.isOpen = payload;
    },
    ocultarCargando(state) {
      state.isOpen = false;
    },
  },
});

export const { mostrarCargando, ocultarCargando,toggleCargandoParam } = splashSlice.actions;
