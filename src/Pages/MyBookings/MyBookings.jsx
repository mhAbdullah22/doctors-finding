import React, { useEffect, useState } from 'react';
import { NavLink, useLoaderData} from 'react-router';
import { getStoreddr } from '../../Utility/addtoDB';
import MyBooking from './MyBooking';
import Recharts from '../Recharts/Recharts';

const MyBookings = () => {
  const handleCancelAppointment=(id)=>{
    const remainingdr=drstate.filter(dr=>dr.id!==id)
    setDrState(remainingdr);
    }

   
  const [drstate,setDrState]=useState([]);
  const fetchdata=useLoaderData();
  useEffect(()=>{
    const data=getStoreddr();
    const converteddata=data.map(dr=>parseInt(dr));
    const drList=fetchdata.filter(dr=>converteddata.includes(dr.id));
    setDrState(drList);
    
   
  },[])
 


    if (drstate.length > 0) {
      return (
        <>
          <div>
            <Recharts drstate={drstate} fetchdata={fetchdata} />
          </div>
          <div>
            <h3 className='font-bold text-2xl text-center mt-8'>My Today Appointments</h3>
            <p className='text-center my-3'>
              Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
            </p>
          </div>
          {
            drstate.map(d => (
              <MyBooking
                handleCancelAppointment={handleCancelAppointment}
                d={d}
                key={d.id}
              />
            ))
          }
        </>
      );
    } 
    
    else {
      return (
        <div className="text-center mt-10 py-36">
          <h2 className="text-3xl font-semibold mb-4">You have not booked any appointment yet</h2>
          <p>Our platform connects you with verified,experienced doctors across various specialties-all at your convenience</p>
         <NavLink to='/'> <button className='btn btn-primary mt-4'>Book an Appointment</button></NavLink>
        </div>
      );
    }
  }
  
   


export default MyBookings;