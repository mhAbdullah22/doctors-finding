import React from 'react';
import { useLoaderData } from 'react-router';
import Blog from './Blog';
import  { useEffect, useState } from 'react';

const Blogs = () => {
  const blogsdata=useLoaderData();
   
  const [visible, setVisible] = useState(true);
    useEffect(() => {
      const timer = setTimeout(() => setVisible(false), 400);
      return () => clearTimeout(timer);
    }, []);

    return visible ? (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-75 z-50">
       <span className="loading loading-bars loading-lg"></span>
      </div>
    ):( <div className='my-4'>
      {
       blogsdata.map(blog=><Blog key={blog.id} blog={blog}></Blog>)
      }
 
     </div>)

  // return (
  //   <div className='my-4'>
  //    {
  //     blogsdata.map(blog=><Blog key={blog.id} blog={blog}></Blog>)
  //    }

  //   </div>
  // );
};

export default Blogs;