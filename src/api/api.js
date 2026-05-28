import axios from "axios";

//AXIOS CONFIG NEEDED IN REAL SCENARIO
export const api = axios.create({
  baseURL: "https://api.myportfolio.com",
});

// optional: auto attach headers (real apps do this)
api.interceptors.request.use((config) => {
  config.headers.Authorization = "Bearer TOKEN";
  return config;
});
