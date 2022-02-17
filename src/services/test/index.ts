import axios from '@/helpers/request';
import { BlogPropertiesI } from './index.d';

// export const getBlogByIdService = async (id: string) => {
//   try {
//     const res = await axios.get(`/api/blog/post/${id}`);
//     return Promise.resolve(res);
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };

export const createBlogService = async (param: BlogPropertiesI) => {
  try {
    const res = await axios.post(`/api/blog/post`, param);
    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};
