import React, { Suspense, useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';


const Doctors = () => {
 const [doctorsPromise,setDoctorsPromise]=useState([]);
  
  useEffect(()=>{
    fetch("/doctorsdata.json").then(res=>res.json()).then(data=>setDoctorsPromise(data));
  },[])
  return (
    <Suspense fallback={<span className="loading loading-bars loading-lg"></span>}>

        <div className='grid grid-cols-3 gap-2'>
        {
            doctorsPromise.map(doctor=><Doctor doctor={doctor} key={doctor.id}></Doctor>)
            
          }
        </div>
        
      </Suspense>
  );
};

export default Doctors;