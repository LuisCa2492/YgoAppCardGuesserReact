import axios from 'axios';

export const yugiohApi = axios.create({
   //baseURL: 'https://db.ygoprodeck.com/api/v7',
   baseURL: 'http://localhost:5000',
});