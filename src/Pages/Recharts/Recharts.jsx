import React, { useEffect, useState } from 'react';

import { getStoreddr } from '../../Utility/addtoDB';

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const Recharts = ({fetchdata}) => {
  
  const fetchdat=fetchdata;
  
  const [chartdata,setChartdata]=useState([]);
  
  useEffect(()=>{
   
   const data=getStoreddr();
    // console.log(data);
    const converteddata=data.map(dr=>parseInt(dr));
    const drList=fetchdat.filter(dr=>converteddata.includes(dr.id));
    setChartdata(drList);
    // console.log(drList);
  },[])
  
  const updatedData = chartdata.map(item => ({
    ...item,
    consultation_fee: parseInt(item.consultation_fee)
  }));
  console.log(updatedData);
  
  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
  
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  
  return (
     <div className='bg-white m-3 p-5 rounded-2xl'>      
      <BarChart
      width={1200}
      height={400}
      data={updatedData}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="consultation_fee" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {updatedData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
  

     </div>
      
  );
};

export default Recharts;