import React from 'react';
import successdr from '../../assets/C001-assets/success-doctor.png'
import review from '../../assets/C001-assets/success-review.png'
import patients from '../../assets/C001-assets/success-patients.png'
import staffs from '../../assets/C001-assets/success-doctor.png'
const Success = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-4 py-10'>
      <h3 className='font-bold text-3xl'>We Provide Best Medical Services</h3>
      <p>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>
      <div className='flex gap-12 items-center justify-center '>
        <div className='bg-white py-3 pl-3 pr-6 flex flex-col gap-2 rounded-md'>
          <img className='w-[30px]' src={successdr} alt="" />
          <h1 className='font-bold text-4xl'>199+</h1>
          <p>Total Doctors</p>
        </div>
        <div className='bg-white py-3 pl-3 pr-6 flex flex-col gap-2 rounded-md'>
          <img className='w-[30px]' src={review} alt="" />
          <h1 className='font-bold text-4xl'>467+</h1>
          <p>Total Reviews</p>
        </div>
        <div className='bg-white py-3 pl-3 pr-6 flex flex-col gap-2 rounded-md'>
          <img className='w-[30px]' src={patients} alt="" />
          <h1 className='font-bold text-4xl'>1900+</h1>
          <p>Patients</p>
        </div>
        <div className='bg-white py-3 pl-3 pr-6 flex flex-col gap-2 rounded-md'>
          <img className='w-[30px]' src={staffs} alt="" />
          <h1 className='font-bold text-4xl'>300+</h1>
          <p>Total staffs</p>
        </div>
      </div>
    </div>
  );
};

export default Success;