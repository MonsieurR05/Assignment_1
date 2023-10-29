// Home.js

import BaseLayout from '@/components/BaseLayout';
import React, { useState } from 'react';
import Head from 'next/head';


const Home = () => {

 
   
  
   const images = [
    'https://via.placeholder.com/800x400/111111/FFFFFF?text=Slide+1',
    'https://via.placeholder.com/800x400/222222/FFFFFF?text=Slide+2',
    'https://via.placeholder.com/800x400/333333/FFFFFF?text=Slide+3'
  
   ]
  return (
    <>
      <Head>
        <title>Rahul | Home</title>
      </Head>

      <BaseLayout>
      <h1>Your Carousel</h1>
      <SmallCarousel images={images} />
      </BaseLayout>
    </>
  );
};
  

export default Home;
