import axios from 'axios';

export const dbScoreApi = axios.create({
    baseURL: 'https://localhost:44327/api',
});