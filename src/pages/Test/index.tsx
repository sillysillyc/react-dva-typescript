import { useEffect } from 'react';
import { createBlogService } from '@/services/test';
const Test = () => {
  const createBlog = async (blogObj?: any) => {
    try {
      const result = await createBlogService(
        blogObj || {
          title: 'ttt',
          author: 'ccc',
          description: 'dec',
          body: `asfvabsnjdas
      fasfbhajsfas
      fasfjas
      fas
      fa
      sf
      as
      f`,
        },
      );
      console.log(result);
    } catch (error) {}
  };

  useEffect(() => {
    // getAllBlogsService().then((res) => console.log(res));
    // @ts-ignore
    // getBlogByIdService('620dc3f02ac7c8bb0dd90035');
    // @ts-ignore
    // createBlog();
  }, []);
  return (
    <div>
      Test
      <div>
        <button type="button" onClick={() => createBlog()}>
          Upload
        </button>
      </div>
    </div>
  );
};

export default Test;
