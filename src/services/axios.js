import axios from 'axios';

const clientAxios = axios.create({
  baseURL: process.env.REACT_APP_URL_BASE,
  headers:{
    "content-type": "application/json",
    "x-apikey": process.env.REACT_APP_API_KEY,
    "cache-control": "no-cache"
  }
});

export default clientAxios;