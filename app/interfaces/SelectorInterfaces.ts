import { OrdenIdSliceInterface } from "../store/Ordenes/OrdenIdSlices";
import { OrdenSliceInterface } from "../store/Ordenes/OrdenSlices";
import { ModalFechaInterface } from "../store/modals/modalFecha";
import { SplashInterface } from "../store/splash/splashSlice";

export interface SelectorInterface {
    splash:SplashInterface
    ordenes:OrdenSliceInterface
    ordenesId:OrdenIdSliceInterface
    modalFechaSlice:ModalFechaInterface
}