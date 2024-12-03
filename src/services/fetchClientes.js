import axios from 'axios';

// Defina a URL da API
const apiUrl = 'http://localhost:5000/client'; // Substitua pela URL correta do seu servidor

// Função para pegar os dados da rota GET /client
async function fetchClientes() {
  try {
    const response = await axios.get(apiUrl);
    return response.data;  // Retorna os dados recebidos
  } catch (error) {
    console.error('Erro ao buscar os clientes:', error);
    throw error;
  }
};
export default fetchClientes;