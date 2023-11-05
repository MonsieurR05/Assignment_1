import React from 'react';
import Head from 'next/head';
import BaseLayout from '@/components/BaseLayout';
import Link from 'next/link';
import Image from 'next/image';
import Test from 'public/ice.jpg';
import forest from'public/forest.jpg';
import antarctica from 'public/antarctica.jpg'
import TextAnimation from '@/components/TextAnimation';
import animal from 'public/animals.png'

const Project = ({ title, type, img, href, summary, color }) => {
  return (
    <article style={{
      width: '30%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '20px',
      border: '4px solid #333',
      backgroundColor: color,
      padding: '24px',
      position: 'relative',
      margin: '8px', // Add margin to create space between projects
      top: '250px'
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
        justifyContent: 'space-between',
        marginTop: '16px',
      }}>
        <span style={{
          color: 'blue',
          fontWeight: '500',
          fontSize: '20px',
        }}>
          {type}
        </span>
        <h2 style={{
          margin: '8px 0',
          width: '100%',
          textAlign: 'left',
          fontSize: '24px',
          fontWeight: 'bold',
          fontSize: '18px',
        }}>
          {title}
        </h2>
        <p style={{
          margin: '8px 0',
          fontWeight: '500',
          position: 'relative',
          bottom: '-1px',
          color: '#333',
        }}>
          {summary}
        </p>
      
        <div style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <Link
            href={href}
            target="_blank"
            style={{
              marginLeft: '16px',
              borderRadius: '10px',
              backgroundColor: 'gray',
              color: '#f4f4f4',
              padding: '12px 24px',
              fontWeight: '600',
            }}
          >
            Learn
          </Link>
        </div>
      </div>
    </article>
  );
};

const Discover = () => {
  return (
    <>
      <Head>
        <title>Rahul | Discover</title>
      </Head>

      <BaseLayout>
        <TextAnimation  
        style={{
        fontSize: '400%',
        position: 'relative',
        top: '10vh',
        left: '120px'
        }}
        text="Let's learn about 3 different biomes and more!"
     
        
        />
          
       
        <div style={{
          display: 'flex',
          flexWrap: 'wrap', // Allow items to wrap to the next line
          justifyContent: 'space-between', // Space items evenly
        }}>
          <Project
            type="Amazon Rainforest"
            title="What is happening in the Amzon Rainforest?"
            summary="In this topic, you will leanrn about the problems in the Amazon Rainforest."
            img={forest}
            href="/forest"
            color='green'
          />

          <Project
            type="Antarctica"
            title="What is happening in Antarctica?"
            summary="In this topic, you will leanrn about the problems in Antarctica."
            img={antarctica}
            href="/antartica"
            color='#58E6D9'
          />
          
          <Project
            type="Endangered Animals"
            title="Which animals today are sadly endangered?"
            summary="You will find out 5 different animals that are endangered and why."
            img={animal}
            href="/animal"
            color='orange'
          />
        </div>
      </BaseLayout>
    </>
  );
};

export default Discover;