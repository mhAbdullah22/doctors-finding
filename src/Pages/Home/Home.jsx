import React from 'react';
import Banner from './Banner';
import Doctors from '../Doctors/Doctors';
import Success from '../Success/Success';

const Home = () => {
  return (
   <div>
     <Banner></Banner>
     <Doctors></Doctors>
     <Success></Success>
   </div>
  );
};

export default Home;