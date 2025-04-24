import React from 'react';

import { Link } from 'react-router';

const Doctor = ({doctor}) => {
 const {image,name,experience,education,registration_number,speciality,id}=doctor;
  // console.log(doctor);
  return (
    <div className='bg-white py-5 px-3  flex flex-col gap-3 rounded-xl items-center justify-center my-5'>
      <div>
      <img className='w-[320px] h-[250px] 
      bg-[#38adb5] rounded-xl' src={image} alt="" />
      </div>
      <div className='flex gap-3'>
        <button className='btn bg-green-200 rounded-3xl'>Available</button>
        <button className='btn bg-sky-200 rounded-3xl'>{experience} Experience</button>
        <button className='btn bg-lime-200 rounded-3xl'>{speciality}</button>
      </div>
      <h3 className='font-bold text-2xl'>{name}</h3>
      <p className='text-xl'>{education}</p>
      <p>Reg No:{registration_number}</p>
      <Link to={`/doctordetails/${id}`}><button  className='btn border-2 border-blue-400 text-blue-400 px-22 rounded-3xl py-2'>View Details</button></Link>
    </div>
  );
};

export default Doctor;