import { createSlice } from "@reduxjs/toolkit";
import { fetchIdOrden} from "./Thunks";
import {
  City,
  Client,
  Contract,
  Group,
  ImageOrder,
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
  image_order:ImageOrder[]
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
  image_order : []
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
          image_order
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
        state.image_order = state.image_order
        state.image_order=image_order
      });
  },
});

export const {} = ordenIdSlice.actions;

