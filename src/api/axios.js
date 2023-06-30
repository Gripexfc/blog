import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3002',
    timeout: 1000,
    headers: {'Content-Type': 'application/json'}
});

instance.interceptors.request.use(function (config) {
    console.log('请求拦截');
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  if (response.config.url === "/login" && response.data.token) {
    // document.cookie
  }
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default instance;

