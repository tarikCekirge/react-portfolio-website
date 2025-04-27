import axios from "axios";

// const API_BASE_URL = "https://reqres.in/api/workintech";
const API_BASE_URL = "/";

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
