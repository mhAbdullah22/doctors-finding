import React from 'react';

const MyBooking = ({d,handleCancelAppointment}) => {
 
 
  return (
    
        
        
          <div className='bg-white rounded-2xl p-6 flex flex-col gap-4 my-4'>
            <div className='flex items-center justify-between '>
            <div>
              <p className='font-bold '>{d.name}</p>
              <p>{d.education}</p>
            </div>
            <div>
              <p>Appointment fee:{d.
consultation_fee} + VAT</p>
            </div>
            </div>
            <div>
              <button onClick={() => 
            handleCancelAppointment(d.id)}
 className='btn border-2 border-red-400
              rounded-3xl text-red-400 bg-white px-138 text-nowrap'>Cancel Appointment</button>
            </div>
          </div>
      
  );
};

export default MyBooking;