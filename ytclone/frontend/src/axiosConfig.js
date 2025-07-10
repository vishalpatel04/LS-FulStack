import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/', // make sure Django backend is running
});

export default instance;