import axios from "axios";

export const API = axios.create({
  // baseURL: "https://v3.controledepontojm.com",
  baseURL: "http://localhost:3333",
});