import React, { useEffect } from 'react';
import { getAllBlogs } from '@/helpers/axios-interfaces/test';
const Test = () => {
  useEffect(() => {
    getAllBlogs().then((res) => console.log(res));
  }, []);
  return <div>Test</div>;
};

export default Test;
