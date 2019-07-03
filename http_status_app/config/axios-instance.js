import * as axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 20000,
  headers: {
    "Content-Type": "application/json"
  }
});

export { axiosInstance as default };
