import React, { useEffect, useState } from 'react';
import { getStoreddr } from '../../Utility/addtoDB';


const Recharts = () => {

  const [chartdata,setChartdata]=useState([]);
  // useEffect(()=>{
  //  fetch("/doctorsdata.json").then(res=>res.json()).then(data=>setChartdata(data));
  // },[])
  // console.log(chart);
  // const data=setChartdata([d,chartdata]);
  // console.log(data);
  
  useEffect(()=>{
    const fetchdata=fetch("/doctorsdata.json").then(res=>res.json()).then(data=>setChartdata(data));
    const data=getStoreddr();
    console.log(data);
    const converteddata=data.map(dr=>parseInt(dr));
    const drList=fetchdata.filter(dr=>converteddata.includes(dr.id));
    console.log(drList);
  },[])
  
  
  return (
    <div>
      <h3>Recharts</h3>
    
    </div>
  );
};

export default Recharts;