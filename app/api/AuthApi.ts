import axios from "axios";

export const authApi = axios.create({
  baseURL: "https://core.gsoft.app",
});
