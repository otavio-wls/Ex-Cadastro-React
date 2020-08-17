import axios from 'axios';

const api = axios.create({
    baseURL: 'https://medusa.viniciuss.dev/api/1'
});

export default api;