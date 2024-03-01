import { OrdenIdSliceInterface } from "../store/Ordenes/OrdenIdSlices";
import { OrdenSliceInterface } from "../store/Ordenes/OrdenSlices";
import { ModalFechaInterface } from "../store/modals/modalFecha";
import { SplashInterface } from "../store/splash/splashSlice";
import { NapsliceInterface } from '../store/cajaNap/Napslice';
import { ContratoIDInterface } from "../store/contrato/contratoIdSlice";

export interface SelectorInterface {
    splash:SplashInterface
    ordenes:OrdenSliceInterface
    ordenesId:OrdenIdSliceInterface
    modalFechaSlice:ModalFechaInterface
    nap_box:NapsliceInterface
    contratoID:ContratoIDInterface
}