import axios from "axios";

export const authApi = axios.create({
  baseURL: "https://coresisprot.gsoft.app",
});
