import { createAsyncThunk } from "@reduxjs/toolkit";
import { coreApi } from "../../api/CoreApi";
import { initialNapSlice } from "./Napslice";

export const fetchNap_box = createAsyncThunk("nap_boxID", async (id:number) => {
    return coreApi
      .get(`/api/gsoft/nap_box/${id}/`)
      .then(({ data, status }) => {
        console.log(status);
        
        if (status == 200) {
          return data;
        }
        return initialNapSlice;
      })
      .catch((err) => {
        return initialNapSlice;
      });
  });
  