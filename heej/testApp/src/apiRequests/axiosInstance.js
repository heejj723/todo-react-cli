import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/todolistservices/api',
  timeout: 1000,
});

const headers = {
  'Content-type': 'application/json',
};

export default axiosInstance;
