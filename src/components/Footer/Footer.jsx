import React from 'react';
import logo from '../../assets/C001-assets/logo.png'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const footer = () => {
  return (
       <div className="navbar flex flex-col items-center justify-center gap-3 ">
    <div className="navbar-start ml-[500px]">
      
     <div className='flex flex-row items-center gap-3'>
      <img className='' src={logo} alt="" />
      <h1 className='text-2xl font-bold'>Phudu</h1>
     </div>
    </div>
    <div className="navbar-center border-b-2 border-gray-400 px-16">
      <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
          <li>
           <a>My-Bookings</a>
          </li>
          <li><a>Blogs</a></li>
          <li><a>Contact Us</a></li>
      </ul>
    </div>
    <div className="navbar-end flex gap-4 mr-[500px] pt-2">
      <a href="">< FaFacebook size={22}/></a>
      <a href=""><FaLinkedin size={22} /></a>
      <a href=""><FaGithub size={22} /></a>
    </div>
  </div>
  );
};

export default footer;