import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const DoctorDetails = () => {
  const data=useLoaderData();
  
  const {id}=useParams();
  
  const singledoctor=data.find(d=>d.id===parseInt(id));
  console.log(singledoctor);
  const {image,name,education,registration_number,working_place,consultation_fee,availability}=singledoctor;
  return (
    <div className='flex flex-col gap-5 my-8'>
      <div className='flex flex-col gap-3 items-center justify-center py-6 px-4 bg-white rounded-2xl'>
        <h3 className='font-bold text-2xl'>Doctor’s Profile Details</h3>
        <p className='text-center'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine <br /> checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
      </div>
      <div className='flex flex-row gap-8 items-center bg-white p-6 rounded-2xl'>
        <div className=''><img className='w-[320px] h-[250px] 
      bg-[#38adb5] rounded-xl' src={image} alt="" /></div>
        <div className='flex flex-col gap-3'>
          <h3 className='font-bold text-2xl'>{name}</h3>
          <p>{education}</p>
          <div>
            <p>Working at</p>
            <h3 className='font-bold text-xl'>{working_place}</h3>
          </div>
          <p>Reg No:{registration_number}</p>
          <div className='flex flex-row items-center gap-3'><p className='font-bold'>Availability</p>
          <div className='flex flex-row gap-2'>
            <p className='border-2 border-amber-200 rounded-2xl p-1 bg-amber-100'>{availability[0]}</p>
            <p className='border-2 border-amber-200 rounded-2xl p-1 bg-amber-100'>{availability[1]}</p>
            <p className='border-2 border-amber-200 rounded-2xl p-1 bg-amber-100'>{availability[2]}</p>
            
          </div>
          </div>
          <div> 
            <p>consultation Fee:</p>
            <p className=''>Taka: <span className='text-blue-500'>{consultation_fee}</span><span>(incl. Vat)</span><span className='text-blue-400'>Per consultation</span></p>
          </div>
        </div>
      </div>
      <div className='bg-white rounded-2xl p-10 flex flex-col gap-3'>
        <h3 className='font-bold text-2xl text-center'>Book An Appoinment</h3>
        <div className='flex flex-row items-center justify-between'>
        <p className='font-bold'>Availability</p>
        <p className='border-2 p-1 border-green-300 bg-green-200 rounded-3xl'>Doctor Available Today</p>
        </div>
        <p className='text-xs p-1 bg-[#fcd99d] border-2 border-amber-100 rounded-2xl w-[900px] text-center'>Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</p>
        <button className='btn bg-blue-600 text-white rounded-3xl'>Book Appointment Now</button>
      </div>
    </div>
  );
};

export default DoctorDetails;