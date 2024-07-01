import { configureStore } from "@reduxjs/toolkit";
import { splashSlice } from "./splash/splashSlice";
import { ordenSlice } from "./Ordenes/OrdenSlices";
import { ordenIdSlice } from "./Ordenes/OrdenIdSlices";
import { modalFechaSlice } from "./modals/modalFecha";
import { Napslice } from "./cajaNap/Napslice";
import { contratoIdSlice } from "./contrato/contratoIdSlice";
import { opcionesSLice } from "./instalacion/opcionesSlices";
import { coreSlice } from "./core/coreSlice";
import { ordenActiveSlice } from "./Ordenes/OrdenActiveSlice";
import { provisioningSlice } from "./instalacion/provisioningSlices";

export const store = configureStore({
  reducer: {
    splash: splashSlice.reducer,
    ordenes: ordenSlice.reducer,
    ordenesId: ordenIdSlice.reducer,
    modalFechaSlice: modalFechaSlice.reducer,
    nap_box: Napslice.reducer,
    contratoID: contratoIdSlice.reducer,
    opciones:opcionesSLice.reducer,
    core:coreSlice.reducer,
    ordenActive:ordenActiveSlice.reducer,
    provisiningActive:provisioningSlice.reducer,
  },
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
