import React from 'react';

const Loader = () => {
  return (
    <div>
       <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-75 z-50">
    <div className="spinner border-4 border-blue-500 border-t-transparent rounded-full w-10 h-10 animate-spin"></div>
  </div>
    </div>
  );
};

export default Loader;