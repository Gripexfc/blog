import axios from 'axios';
import cookie from 'react-cookies';

const instance = axios.create({
    baseURL: 'http://localhost:3002',
    timeout: 5000, // 将超时时间调整为 5000 毫秒
    withCredentials: true, 
    headers: {'Content-Type': 'application/json'},
});

instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    console.log(config,'---------');
    if (cookie.load('token')) {
      config.headers.Authorization = cookie.load('token');
    }
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  console.log(response.config,'response.config');
  if (response.config.url === "/blogUsers/login" && response.data.token) {
    cookie.save('token',response.data.token)
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

