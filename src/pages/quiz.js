import React from 'react';
import BaseLayout from '@/components/BaseLayout';
import Page from '@/components/Page';
import SecondPage from '@/components/SecondPage';
import ThirdPage from '@/components/ThirdPage';
import TextAnimation from '@/components/TextAnimation';

const quiz = () => {
  return (
    <BaseLayout>
        <TextAnimation  
        style={{
        fontSize: '400%',
        position: 'relative',
        top: '5vh',
        left: '350px'
        }}
        text="Let's see how much you know!"
     
        
        />
        <Page />
        <SecondPage />
        <ThirdPage />
  
    </BaseLayout>
  );
};

export default quiz;
