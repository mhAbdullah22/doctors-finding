import React from 'react';
import banner from '../../assets/C001-assets/banner-img-1.png'
const Banner = () => {
  return (
    <div className='border-2 border-white rounded-xl my-2 bg-[#f1f1f1]'>
      <div className='flex flex-col items-center justify-center gap-4 py-8'>
            <h1 className='font-bold text-3xl text-center'>Dependable Care, Backed by Trusted <br /> Professionals.</h1>
            <p className='text-center'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine <br /> checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            <div className='flex  items-center gap-4'>
              <input placeholder='Search any doctor' className='bg-white rounded-3xl py-2 pr-36 pl-2' type="search" name="" id="" />
              <button className='btn btn-primary rounded-3xl bg-[#176AE5]'>Search Now</button>
            </div>
            <div className='flex flex-row gap-4'>
              <img className='w-[450px] h-[300px]' src={banner} alt="" />
              <img className='w-[450px] h-[300px]' src={banner} alt="" />
            </div>
          </div>
    </div>
  );
};

export default Banner;