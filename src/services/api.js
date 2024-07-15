import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketmovies-back-82xh.onrender.com"
});