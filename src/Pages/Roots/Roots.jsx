import React from 'react';
import { Outlet } from 'react-router';

import Footer from '../../components/Footer/footer';
import Navbar from '../../components/Header/Navbar';
const Roots = () => {
  return (
    <div className='max-w-7xl mx-auto'>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
    </div>
  );
};

export default Roots;