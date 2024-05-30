import axios from "axios";

const url = 'http://127.0.0.1:5001/wktk-48a/us-central1/app';
const api = axios.create({ baseURL: url });

api.interceptors.request.use((config) => {
  return config;
});

export default api;
