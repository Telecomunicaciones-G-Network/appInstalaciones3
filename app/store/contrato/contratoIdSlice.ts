import { createSlice } from "@reduxjs/toolkit";
import { fetchIdContratoId } from "./Thunks";
import { Contrato, ServiceDetail } from "../../core/Interfaces/ContratoID";

export interface ContratoIDInterface {
  isLoading: boolean;
  contrato: Contrato | null;
  serviceDetail: ServiceDetail | false;
}

export const inicialStateContratoID: ContratoIDInterface = {
  isLoading: false,
  contrato: null,
  serviceDetail: false,
};

export const contratoIdSlice = createSlice({
  name: "contratoID",
  initialState: inicialStateContratoID,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIdContratoId.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchIdContratoId.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contrato = payload;
        
        
        state.serviceDetail =
          payload.contract_detail[0].service_detail.length > 0 &&
          payload.contract_detail[0].service_detail[0];
        // state.count=payload.count
      });
  },
});

export const {} = contratoIdSlice.actions;
