import { createSlice } from "@reduxjs/toolkit";
import { fetchIdOrden} from "./Thunks";
import {
  City,
  Client,
  Contract,
  Group,
  Municipality,
  OrdenId,
  OrderDetail,
  PaymentDetail,
  Sector,
  State,
  Zone,
} from "../../core/Interfaces/OrdenIdInterface";

export interface OrdenIdSliceInterface {
  isLoading: boolean;
  ordenID: OrdenId | false;
  city: City | false;
  client: Client | false;
  contract: Contract | false;
  group: Group | false;
  municipality: Municipality | false;
  orderDetail: OrderDetail | false;
  paymentDetail: PaymentDetail | false;
  sector: Sector | false;
  state: State | false;
  zone: Zone | false;
}

export const initialStateOrdenId: OrdenIdSliceInterface = {
  isLoading: false,
  ordenID: false,
  city: false,
  client: false,
  contract: false,
  group: false,
  municipality: false,
  orderDetail: false,
  paymentDetail: false,
  sector: false,
  state: false,
  zone: false,
};

export const ordenIdSlice = createSlice({
  name: "ordenId",
  initialState: initialStateOrdenId,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIdOrden.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchIdOrden.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const {
          city,
          client,
          contract,
          group,
          municipality,
          orderDetail,
          paymentDetail,
          sector,
          state: estado,
          zone,
        } = payload;
        state.ordenID = payload;
        state.city = city;
        state.client = client;
        state.contract = contract;
        state.group = group;
        state.municipality = municipality;
        state.orderDetail = orderDetail;
        state.paymentDetail = paymentDetail;
        state.sector = sector;
        state.state = estado;
        state.zone = zone;
        state.ordenID=payload
      });
  },
});

export const {} = ordenIdSlice.actions;

