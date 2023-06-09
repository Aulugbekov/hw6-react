import axios from "axios";

const $api = axios.create({
  baseURL: "http://localhost:3000",
});

$api.interceptors.request.use((config) => {
  config.headers["Content-Type"] = "";
  return config;
});

$api.interceptors.response.use((data) => data);

export default $api;
