import { createSlice } from "@reduxjs/toolkit";
import {  fetchProvisioning } from "./Thunks";
import { Opciones } from "../../core/Interfaces/Opciones";

export interface Provisioning {
    onu_signal: string
    onu_signal_1310: string
    onu_signal_1490: string
    onu_signal_value: string
    response_code: string
    status: boolean
  }
  

export interface ProvisioningInterface {
  isLoading: boolean;
  provisioning: Provisioning | null;
  valid:boolean
}

export const inicialStateProvisioningSlice: ProvisioningInterface = {
  isLoading: false,
  provisioning: null,
  valid:false
};
export const provisioningSlice = createSlice({
  name: "provisioningSlice",
  initialState: inicialStateProvisioningSlice,
  reducers: {
    setValidSlice(state,{payload}){
        state.valid = payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProvisioning.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProvisioning.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.provisioning = payload
        // state.count=payload.count
      });
  },
});


export const {setValidSlice}  =provisioningSlice.actions