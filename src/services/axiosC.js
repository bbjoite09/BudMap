import axios from "axios";
import { getCookie } from "./cookie";

const axiosC = axios.create({
  headers: { accessToken: await getCookie("accessToken") },
  withCredentials: true,
});

export default axiosC;
