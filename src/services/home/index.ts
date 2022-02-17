import axios from '@/helpers/request';

/**
 * 查询所有
 */
export const getAllBlogsService = async () => {
  try {
    const res = await axios.get('/api/blog/posts');
    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getBlogByIdService = async (id: string) => {
  try {
    const res = await axios.get(`/api/blog/post/${id}`);
    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};
