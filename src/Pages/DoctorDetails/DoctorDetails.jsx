import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const DoctorDetails = () => {
  const data=useLoaderData();
  
  const {id}=useParams();
  
  const singledoctor=data.find(d=>d.id===parseInt(id));
  console.log(singledoctor);
  const {image,name,education,registration_number,working_place,consultation_fee,availability}=singledoctor;
  return (
    <div>
      <div className='flex flex-col gap-3 items-center justify-center py-6 px-4 bg-white rounded-2xl'>
        <h3 className='font-bold text-2xl'>Doctor’s Profile Details</h3>
        <p className='text-center'>Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor amet ut. Suscipit sed est fermentum magna. Quis vitae tempus <br /> facilisis turpis imperdiet mattis donec dignissim volutpat.</p>
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
      <div>b</div>
    </div>
  );
};

export default DoctorDetails;