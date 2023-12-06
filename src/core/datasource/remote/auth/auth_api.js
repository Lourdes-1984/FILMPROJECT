import axios from "axios";

export const authApi = axios.create({
  baseUrl: "http://localhost:5000",
  withCredentials: true, //indica que usa cookies
});
