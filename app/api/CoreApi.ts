import axios from "axios";
import { ToastError } from "../libs/Toast";
import Storage from "../libs/storage";

export const coreApi = axios.create({
  baseURL: "https://core.gsoft.app",
});

coreApi.interceptors.request.use(async(config) => {
  // Modificar la configuración de la solicitud antes de enviarla
  // Puedes agregar encabezados, tokens, etc.
  const a =await Storage.get('accessToken')
  
  
  if (a) {
    const token = JSON.parse(a);
    config.headers["Authorization"] = `Bearer ${token}`;
    
  }
  return config;
});

coreApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Manejar errores de respuesta
    if (error.response.status == 500) {
      ToastError("Server Internal Error (500)");
    }
    if (error.response.status == 0) {
      ToastError("Error de conexion, intente nuevamente");
    }
    // if (error.response.status == 401) {
    //   localStorage.clear();
    //   window.location.href = "/auth/";
    //   return;
    // }
    return Promise.reject(error);
  }
);
