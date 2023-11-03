import React from 'react';
import Head from 'next/head';
import BaseLayout from '@/components/BaseLayout';
import Link from 'next/link';
import Image from 'next/image';
import Test from 'public/ice.jpg'

const Project = ({ title, type, img, link, summary, color }) => {
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
          bottom: '-4px',
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

const Discover = () => {
  return (
    <>
      <Head>
        <title>Rahul | Projects</title>
      </Head>

      <BaseLayout>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap', // Allow items to wrap to the next line
          justifyContent: 'space-between', // Space items evenly
        }}>
          <Project
            type="HTML, JavaScript and CSS Project"
            title="Bouncing Images"
            summary="A combination of HTML, JS and CSS to create bouncing images with one image that will take you to a different page. Project was done as an assignment for College."
            img={Test}
            link="/Bouncing/Project.html"
            color='green'
          />

          <Project
            type="HTML, JavaScript and CSS Project"
            title="Bouncing Images"
            summary="A combination of HTML, JS and CSS to create bouncing images with one image that will take you to a different page. Project was done as an assignment for College."
            img={Test}
            link="/Bouncing/Project.html"
            color='#58E6D9'
          />
          
          <Project
            type="Another Project Type"
            title="Another Project"
            summary="This is another project summary."
            img={Test} // Use a different image for the second project if available
            link="/Another/Project.html" // Provide a different link for the second project
            color= 'orange'
          />
        </div>
      </BaseLayout>
    </>
  );
};

export default Discover;
