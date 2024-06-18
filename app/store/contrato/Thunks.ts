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
          console.log(JSON.stringify(data))
          return data;
        }
        return inicialStateContratoID;
      })
      .catch((err) => {
        console.log(err.response);

        return inicialStateContratoID;
      });
  }
);
