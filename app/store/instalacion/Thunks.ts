import { createAsyncThunk } from "@reduxjs/toolkit";
import { coreApi } from "../../api/CoreApi";
import { inicialStateOpciones } from "./opcionesSlices";

export const fetchOpciones = createAsyncThunk(
  "opcionesInstalacion",
  async () => {
    return coreApi
      .get(`/api/gsoft/installations/calendar/options/`)
      .then(({ data, status }) => {
        if (status == 200) {
          return data;
        }
        return inicialStateOpciones;
      })
      .catch((err) => {
        console.log(err);

        return inicialStateOpciones;
      });
  }
);

export const patchOpciones = (id:any,body:any)=>{
  return coreApi
  .patch(`/api/gsoft/installations/orders/${id}/`, body)
}
