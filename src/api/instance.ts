import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://api.easyshift.tech:8443',
  headers: {
    'Content-Type': 'application/json',
  },
});
