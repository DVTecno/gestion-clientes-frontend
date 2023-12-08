import { API_URL } from "../const/API.URL.js";
import axios from "axios";

class ClienteService {
  constructor() {
    this.apiBaseUrl = API_URL.URL;
    this.credentials = {
      username: "diego",
      password: "12345678"
    };
  }

  async getAllClientes() {
    const response = await axios.get(`${this.apiBaseUrl}${API_URL.CLIENTS}`, {
      auth: this.credentials // Pasar las credenciales de autenticación
    });
    console.log(response.data);
    return response.data;
  }

  async getClienteById(id) {
    const response = await axios.get(
      `${this.apiBaseUrl}${API_URL.CLIENTS}/${id}`,
      {
        auth: this.credentials // Pasar las credenciales de autenticación
      }
    );
    console.log(response.data);
    return response.data;
  }

  async createCliente(cliente) {
    const response = await axios.post(
      `${this.apiBaseUrl}${API_URL.CLIENTS}`,
      cliente,
      {
        auth: this.credentials // Pasar las credenciales de autenticación
      }
    );
    return response.data;
  }

  async updateCliente(id, cliente) {
    const response = await axios.put(
      `${this.apiBaseUrl}${API_URL.CLIENTS}/${id}`,
      cliente,
      {
        auth: this.credentials // Pasar las credenciales de autenticación
      }
    );
    return response.data;
  }

  async deleteCliente(id) {
    const response = await axios.delete(
      `${this.apiBaseUrl}${API_URL.CLIENTS}/${id}`,
      {
        auth: this.credentials // Pasar las credenciales de autenticación
      }
    );
    return response.data;
  }
}

export default new ClienteService();
