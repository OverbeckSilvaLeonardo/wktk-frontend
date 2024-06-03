import axios from "axios";
import { useUsuariosStore } from '@/stores/usuario';

const url = 'http://127.0.0.1:5001/wktk-48a/us-central1/app';
const api = axios.create({ baseURL: url });

api.interceptors.request.use((config) => {
  const store = useUsuariosStore();
  if (!store.usuario.user) {
    return config;
  }

  config.headers['Authorization'] = store.usuario._tokenResponse.idToken;
  return config;
});

export default api;
