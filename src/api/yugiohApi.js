import axios from 'axios';

export const yugiohApi = axios.create({
   baseURL_DBSCORE: 'http://localhost:5000',
   //baseURL: 'https://db.ygoprodeck.com/api/v7',
   baseURL: 'https://serverygoappcardguesser-production.up.railway.app',
});