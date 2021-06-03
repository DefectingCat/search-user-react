import axios from 'axios';

// https://api.github.com/search/users?q=test
const ax = axios.create({
  baseURL: 'https://api.github.com/search/users',
  timeout: 5000,
});
// 响应拦截器
ax.interceptors.response.use((value) => {
  return value.data;
});

export default ax;
