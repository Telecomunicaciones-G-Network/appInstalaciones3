import { createSlice } from "@reduxjs/toolkit";
import { fetchOpciones } from "./Thunks";
import { Opciones } from "../../core/Interfaces/Opciones";

export interface OpcionesInterface{
    isLoading:boolean
    opciones:Opciones[]
}

export const inicialStateOpciones:OpcionesInterface={
    isLoading:false,
    opciones:[]
}
export const opcionesSLice=createSlice({
    name:'opcionesSlice',
    initialState:inicialStateOpciones,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchOpciones.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(fetchOpciones.fulfilled, (state, {payload}) => {
            state.isLoading = false;
             state.opciones=payload
            // state.count=payload.count
            
        });
      },
})