import axios from "axios";

const API_URL = "http://localhost:5000";

export const api = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});

export const login = (data: { username: string; password: string }) =>
  api.post("/auth/login", data);
