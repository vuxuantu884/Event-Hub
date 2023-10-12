import axios from 'axios';
const baseAxios = () => {
  const instance = axios.create({
    baseURL: 'http://103.74.117.107:8282/',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' },
  });
  return instance;
};

export default baseAxios();