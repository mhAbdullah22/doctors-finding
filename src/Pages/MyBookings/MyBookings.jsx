import React, { useEffect, useState } from 'react';
import { useLoaderData} from 'react-router';
import { getStoreddr } from '../../Utility/addtoDB';
import MyBooking from './MyBooking';
import Recharts from '../Recharts/Recharts';

const MyBookings = () => {
  const [drstate,setDrState]=useState([]);
  const fetchdata=useLoaderData();
  useEffect(()=>{
    const data=getStoreddr();
    const converteddata=data.map(dr=>parseInt(dr));
    const drList=fetchdata.filter(dr=>converteddata.includes(dr.id));
    setDrState(drList);
    
     
  },[])
   
  return (
  <div>
    {/* <div>
    {
    drstate.map(d=><Recharts key={d.id}></Recharts>)
   }
    </div> */}
    <div>
    <h3 className='font-bold text-2xl text-center mt-8'>My Today Appointments</h3>
    <p className='text-center my-3'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
    </div>
      {
    drstate.map(d=><MyBooking d={d} key={d.id}></MyBooking>)
   }
  </div>
  );
};

export default MyBookings;