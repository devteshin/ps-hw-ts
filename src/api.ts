import axios from 'axios'
import { useAuthStore } from './stores/auth.store';


export const API_ROUTES = {
  meditations: `meditations`,
  profile: `profile`,
  stats: `stats`,
  auth: {
    login: `auth/login`,
    register: `auth/register`,
  },
};

export const http = axios.create({
  baseURL: 'http://localhost:3000/api/',
  timeout: 10000,
});

export function client() {
  const authStore = useAuthStore();

  return axios.create({
    baseURL: "http://localhost:3000/api/",
    timeout: 10000,
    headers: {
      Authorization: `Bearer ${authStore.getToken}`
    }
  })
};



