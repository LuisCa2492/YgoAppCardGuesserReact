import axios from 'axios';

export const yugiohApi = axios.create({
   baseURL: '/ygo/api/v7',
});