import React from 'react';
import Banner from './Banner';
import Doctors from '../Doctors/Doctors';
import Success from '../Success/Success';
import { useLoaderData } from 'react-router';
import  { useEffect, useState } from 'react';

const Home = () => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 400);
    return () => clearTimeout(timer);
  }, []);
  const data=useLoaderData();
  // console.log(data);
  // return (
  //  <div>
  //    <Banner></Banner>
  //    <Doctors data={data}></Doctors>
  //    <Success></Success>
  //  </div>
  // );

  return visible ? (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-75 z-50">
     <span className="loading loading-bars loading-lg"></span>
    </div>
  ) : (
    <div>
      <Banner />
      <Doctors data={data} />
      <Success />
    </div>
  );
};

export default Home;