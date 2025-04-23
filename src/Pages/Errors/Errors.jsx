import React from 'react';
import Navbar from '../../components/Header/Navbar';
import { NavLink } from 'react-router';

const Errors = () => {
  return (
    <div className='pb-37'>
      <Navbar></Navbar>
           <div className='mx-auto w-4/12 bg-white rounded-md my-40 p-10'>
      <div className='flex  flex-col items-center gap-8 p-4'>
        <p>Error!page not found</p>
      
      <NavLink to='/'>   <button className='btn btn-primary'>Home</button></NavLink>
   
      </div>
    </div>
    </div>
  );
};

export default Errors;