import axios from 'axios';

export const yugiohApi = axios.create({
   //baseURL: 'http://localhost:5000',
   //baseURL: 'https://db.ygoprodeck.com/api/v7',
   baseURL: 'https://serverygoappcardguesser-production.up.railway.app',
   // headers: {
   //    'Content-Type': 'application/json',
   //    'Access-Control-Allow-Origin': '*',
   //    'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE',
   //    'Access-Control-Allow-Headers': 'Content-Type'
   // }
});