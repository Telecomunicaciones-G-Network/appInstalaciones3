import { createAsyncThunk } from "@reduxjs/toolkit";
import { coreApi } from "../../api/CoreApi";
import { inicialStateContratoID } from "./contratoIdSlice";

export const fetchIdContratoId = createAsyncThunk(
  "contratoId",
  async (id: number | string) => {
    return coreApi
      .get(`/api/gsoft/contracts/${id}/`)
      .then(({ data, status }) => {
        
        
        if (status == 200) {
          
          return data;
        }
        return inicialStateContratoID;
      })
      .catch((err) => {
        

        return inicialStateContratoID;
      });
  }
);

export const patchContractId=(id:any,body:any)=>{
  return coreApi.patch(`/api/gsoft/contracts/${id}/`,body)
}
