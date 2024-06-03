import axios from "axios";
import { useUsuariosStore } from '@/stores/usuario';

const url = 'https://us-central1-wktk-48a.cloudfunctions.net/app';
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
