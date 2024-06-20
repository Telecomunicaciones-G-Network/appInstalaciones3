import axios from "axios";

export const authApi = axios.create({
  //baseURL: "https://core.gsoft.app",
  baseURL: "http://192.168.196.205:8080",
});
