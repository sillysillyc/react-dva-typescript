import axios from '@/helpers/request';

export const getAllBlogs = async () => {
  try {
    console.log(1222);
    const res = await axios.get('/api/blog/posts');
    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};
