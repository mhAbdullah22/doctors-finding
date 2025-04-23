import React from 'react';

const Blog = ({blog}) => {
  return (
         <div className='bg-white p-4 rounded-2xl my-3'>
      <div className='font-bold'>
        <p>{blog.question}</p>
      </div>
      <div>
        <p>{blog.answer}</p>
      </div>
      </div>
  );
};

export default Blog;