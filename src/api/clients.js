import axios from "axios";

const API = "https://growgreen-backend.onrender.com/api/clients";

export const createClientRequest = (client) => axios.post(`${API}`, client);
