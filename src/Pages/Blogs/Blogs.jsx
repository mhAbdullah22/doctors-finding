import React from 'react';
import { useLoaderData } from 'react-router';
import Blog from './Blog';

const Blogs = () => {
  const blogsdata=useLoaderData();

  return (
    <div className='my-4'>
     {
      blogsdata.map(blog=><Blog key={blog.id} blog={blog}></Blog>)
     }

    </div>
  );
};

export default Blogs;