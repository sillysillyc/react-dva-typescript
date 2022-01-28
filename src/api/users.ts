import axios from '@/api';

/**
 * 通过token获取用户信息
 */
export const getUserInfo = () => {
  return axios.request({
    url: `/user/userInfo`,
    method: 'get',
  });
};
