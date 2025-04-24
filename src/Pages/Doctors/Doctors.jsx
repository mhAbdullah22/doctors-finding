import React, { Suspense, useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';


const Doctors = ({data}) => {
  
  const [showdr,setShowdr]=useState(false);
 const [doctorsPromise,setDoctorsPromise]=useState([]);
  


  useEffect(()=>{
 if(showdr)
 {
  setDoctorsPromise(data)
 }
 else{
  setDoctorsPromise(data.slice(0,6))
 }
  },[showdr,data])

  
  return (
   <div>
     <Suspense fallback={<span className="loading loading-bars loading-lg"></span>}>
        <div className='flex flex-col gap-3 items-center justify-center mt-10'>
          <h3 className='font-bold text-2xl'>Our Best Doctors</h3>
          <p className='text-center'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br /> routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
        </div>
        <div className='grid grid-cols-3 gap-2'>
        {
            doctorsPromise.map(doctor=><Doctor doctor={doctor} key={doctor.id}></Doctor>)
            
          }
      
        </div>
        
      </Suspense>
      <button onClick={()=>setShowdr(!showdr)} className='btn btn-info'>{showdr?'Show Less':'SHow All'}</button>
   </div>
  );
};

export default Doctors;