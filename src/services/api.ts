// src/services/api.ts
import axios from 'axios';
//colando a url do backend para se conectar aqui
const api = axios.create({
  baseURL: 'http://localhost:3001' 
});

export default api;