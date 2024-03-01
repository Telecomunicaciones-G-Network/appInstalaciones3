import { configureStore } from "@reduxjs/toolkit";
import { splashSlice } from "./splash/splashSlice";
import { ordenSlice } from "./Ordenes/OrdenSlices";
import { ordenIdSlice } from "./Ordenes/OrdenIdSlices";
import { modalFechaSlice } from './modals/modalFecha';

export const store = configureStore({
  reducer: {
    splash: splashSlice.reducer,
    ordenes:ordenSlice.reducer,
    ordenesId:ordenIdSlice.reducer,
    modalFechaSlice:modalFechaSlice.reducer
  },
});
