// Home.js

import BaseLayout from '@/components/BaseLayout';
import React, { useState } from 'react';
import Head from 'next/head';
import SmallCarousel from '@/components/SmallCarousel';
import quiz from 'public/quiz.jpg'
import discover from 'public/discover.jpg'
import Link from 'next/link';
import Image from 'next/image';
import TextAnimation from '@/components/TextAnimation';




const Project = ({ title,  img, link, summary, color }) => {
  return (
    <article style={{
      width: '30%',
   
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '20px',
      border: '4px solid #333',
      backgroundColor: color,
      padding: '24px',
      position: 'relative',
      margin: '20px', // Add margin to create space between projects
      top: '10vh',

    }}>
      <Image
        src={img}
        alt={title}
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
     
      <div style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    
        marginTop: '16px',
      }}>
       
        <h2 style={{
          margin: '8px 0',
          width: '100%',
          textAlign: 'left',
          fontSize: '24px',
          fontWeight: 'bold',
          fontSize: '24px',
        }}>
          {title}
        </h2>
        <p style={{
          margin: '8px 0',
          fontWeight: '500',
          position: 'relative',
          bottom: '-1px',
          color: 'black',
          fontSize: '20px'
        }}>
          {summary}
        </p>
      
        <div style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          
        }}>
          <Link
            href={link}
            target="_blank"
            style={{
              marginLeft: '16px',
              borderRadius: '10px',
              backgroundColor: '#333',
              color: '#f4f4f4',
              padding: '12px 24px',
              fontWeight: '600',
            }}
          >
            Visit
          </Link>
        </div>
      </div>
    </article>
  );
};

const Home = () => {

 
   
  
   const images = [
    'https://environment.leeds.ac.uk/images/800x400_tropical_rainforest_min.jpg',
    'https://news.wttw.com/sites/default/files/field/image/Antartica1.jpg',
    'https://gryphonhouseimagery.s3.amazonaws.com/channel_images/9397/match_the_object_to_the_animal-01__large.png'
  
   ]
  return (
    <>
      <Head>
        <title>Rahul | Home</title>
      </Head>
     
      <BaseLayout>
   
      <SmallCarousel images={images} />

      <TextAnimation  
        style={{
        fontSize: '400%',
        position: 'relative',
        top: '5vh',
        left: '200px'
        }}
        text="Welcome to the Climate-Science Website!"

        />
      <div style={{
          display: 'flex',
          flexWrap: 'wrap', // Allow items to wrap to the next line
          justifyContent: 'space-between', // Space items evenly
        }}>
      <Project
        title="Discover Page"
        summary="This page will help you learn about the 3 different topics about places!"
        img={discover}
        link="/discover"
        color='purple'
      />
   
      <Project 
        title="Quiz Page"
        summary="This page is for you to show off what you learnt with a quiz!"
        img={quiz}
        link="/quiz"
        color='yellow'
      />
    
      </div>
      </BaseLayout>
    </>
  );
};
  

export default Home;
