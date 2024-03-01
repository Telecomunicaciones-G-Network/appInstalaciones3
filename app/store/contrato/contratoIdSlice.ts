import { createSlice } from "@reduxjs/toolkit";
import { fetchIdContratoId } from "./Thunks";
import { Contrato } from "../../core/Interfaces/ContratoID";

export interface ContratoIDInterface{
    isLoading:boolean
    contrato:Contrato|false
}

export const inicialStateContratoID:ContratoIDInterface={
    isLoading:false,
    contrato:false
}

export const contratoIdSlice = createSlice({
  name: "contratoID",
  initialState:inicialStateContratoID,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchIdContratoId.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchIdContratoId.fulfilled, (state, {payload}) => {
        state.isLoading = false;
         state.contrato=payload
        // state.count=payload.count
        
    });
  },
});

export const  {} = contratoIdSlice.actions
