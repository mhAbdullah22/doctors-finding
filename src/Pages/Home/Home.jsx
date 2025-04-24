import React from 'react';
import Banner from './Banner';
import Doctors from '../Doctors/Doctors';
import Success from '../Success/Success';
import { useLoaderData } from 'react-router';

const Home = () => {
  const data=useLoaderData();
  console.log(data);
  return (
   <div>
     <Banner></Banner>
     <Doctors data={data}></Doctors>
     <Success></Success>
   </div>
  );
};

export default Home;