/**
 * 创建axios的实例，增加拦截器
 */
import axios, { AxiosResponse } from 'axios';
import codeMessages from './codeMessages';
import { message } from 'antd';

const instance = axios.create({
  timeout: 10000,
});

instance.defaults.headers.post['Content-Type'] = 'application/json';
/**
 * 判断请求是否成功
 */
const isSuccess = (res) => {
  const { status } = res;
  if (status !== 200) {
    return false;
  }
  const { data } = res;
  if (data) {
    if (data.state) {
      return data.state === 1;
    }
    if (data.code) {
      return data.code === 1 || data.code === 200;
    }
    return true;
  }
  return false;
};
/**
 * request拦截器
 */
instance.interceptors.request.use(
  (config: any) => {
    if (!/^http/.test(config.url)) {
      // 本地服务走代理
      config.url = `/api${/^\//.test(config.url) ? '' : '/'}${config.url}`;
    }
    return config;
  },
  (error: any) => {
    Promise.reject(error);
  }
);
/**
 * 异常
 */
const handelException = (res) => {
  console.log('handelException', res);
  const { data } = res;
  const msg = data.msg || data.message;
  message.error(msg || '未知错误');
};
/**
 * response拦截器
 */
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    // 对响应数据做些事
    if (!isSuccess(response)) {
      handelException(response);
      return Promise.reject(response);
    }
    return response.data;
  },
  (error: any) => {
    // 断网 或者 请求超时 状态
    if (!error.response) {
      // 请求超时状态
      if (error.message.includes('timeout')) {
        console.log('超时了');
        message.error('请求超时，请检查网络是否连接正常');
      } else {
        // 可以展示断网组件
        console.log('断网了');
        message.error('请求失败，请检查网络是否已连接');
      }
    } else {
      const code = error.response.status;
      switch (code) {
        default:
          message.error(`${code}-${codeMessages[code] || '未知错误'}`);
      }
    }
    return Promise.reject(error);
  }
);

export default instance;
