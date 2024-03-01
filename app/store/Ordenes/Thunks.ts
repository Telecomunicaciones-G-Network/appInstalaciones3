import { createAsyncThunk } from "@reduxjs/toolkit";
import { coreApi } from "../../api/CoreApi";
import { initialStateOrden } from "./OrdenSlices";
import { initialStateOrdenId } from "./OrdenIdSlices";

export const fetchOrdenes = createAsyncThunk("orden", async (params?: any) => {
  return coreApi
    .get("/api/gsoft/installations/orders/", {
      params,
    })
    .then(({ data, status }) => {
      if (status == 200) {
        return data;
      }
      return initialStateOrden;
    })
    .catch((err) => {
      return initialStateOrden;
    });
});

export const fetchIdOrden = createAsyncThunk(
  "ordenId",
  async (id: number | string) => {
    return coreApi
      .get(`/api/gsoft/installations/orders/${id}/`)
      .then(({ data, status }) => {
        if (status == 200) {
          return data;
        }
        return initialStateOrdenId;
      })
      .catch((err) => {
        console.log(err.response);

        return initialStateOrdenId;
      });
  }
);
