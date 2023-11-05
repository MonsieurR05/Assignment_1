import React from "react";
import {  motion } from "framer-motion";
import { useState } from "react";
import TextAnimation from "@/components/TextAnimation";

const animal = () =>{


    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);
  
    const toggleCard1 = () => {
      setIsOpen1(!isOpen1);
      
    };
  
    const toggleCard2 = () => {
      setIsOpen2(!isOpen2);
     
    };

    const toggleCard3 = () => {
        setIsOpen3(!isOpen3);
        
      };

    const toggleCard4 = () => {
        setIsOpen4(!isOpen4);
       
      };
      
      const toggleCard5 = () => {
        setIsOpen5(!isOpen5);
       
      };
    
    
    return(
        <>


    <a href="/discover">
        <button className="button-style">Discover more</button>
      </a>

    <TextAnimation  
        style={{
        fontSize: '400%',
        position: 'relative',
        bottom: '1vh',
        left: '480px'
        }}
        text="Click on any card to start learning!"
     
        
        />

<style>
        {`
         .app {
            min-height: 10px
            display: flex
            justify-content: center;
            align-items: center;
         }

         .card {
            background: linear-gradient(90deg, black, white, black);
            padding: 3rem 5rem
         }

         .card p {
            padding-top: 1rem;
            line-height: 150%
         }
        `}
      </style>
        <div className="app">
        <motion.div transition={{layout: {duration: 1, type:"spring"}}} layout onClick={toggleCard1} className="card" 
        style={{borderRadius: "1rem", boxShadow:"0px 10px 30px rgba()0,0,0,0.5"}}>
            <motion.h2 layout="position"> Giant Pandas </motion.h2>
         
            {isOpen1 && (
            <motion.div className="open" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}} exit={{opacity: 0}}>
                <p>
                    Gaint Pandas is one of many endangered animals.
                    There are many reasons why they endangered:
                </p>
                <p>
                    People hunt pandas for fur.
                </p>
                <p>
                    Pandas are not meant to eat bamboo.
                </p>
                <p>
                    They losing their own homes because of people.
                </p>

                <p>
                    Sadly, there are only 1,864 Giant Pandas left.
                </p>

            </motion.div>
            )}

    </motion.div>

    </div>

    <style>
        {`
         .app_2 {
            min-height: 10px
            display: flex
            justify-content: center;
            align-items: center;
         }

         .card_2 {
            background: linear-gradient(to right, #ECECEC, #FFFFFF);
            padding: 3rem 5rem
         }

         .card_2 p {
            padding-top: 1rem;
            line-height: 150%
         }
        `}
      </style>

    <div className="app_2">
        <motion.div transition={{layout: {duration: 1, type:"spring"}}} layout onClick={toggleCard2} className="card_2" 
        style={{borderRadius: "1rem", boxShadow:"0px 10px 30px rgba()0,0,0,0.5"}}>
            <motion.h2 layout="position">Polar Bears</motion.h2>
         
            {isOpen2 && (
            <motion.div className="open_2" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}} exit={{opacity: 0}}>
                <p>
                    Polar Bears is one of many endangered animals.
                    There are many reasons why they endangered:
                </p>
                <p>
                    Global warming melts the ice so they struggle to find land.
                </p>

                <p>
                    The Ocean is becoming more poluted which has litter making it harmful for Polar Bears
                </p>

                <p>
                    There are around 20,000 to 31,000 Polar Bears left.
                </p>
            </motion.div>
            )}

    </motion.div>

    </div>

    <style>
        {`
         .app_3 {
            min-height: 10px
            display: flex
            justify-content: center;
            align-items: center;
         }

         .card_3 {
            background: linear-gradient(to right, #D3D3D3, #FFFFFF);
            padding: 3rem 5rem
         }

         .card_3 p {
            padding-top: 1rem;
            line-height: 150%
         }
        `}
      </style>
        <div className="app_3">
        <motion.div transition={{layout: {duration: 1, type:"spring"}}} layout onClick={toggleCard3} className="card_3" 
        style={{borderRadius: "1rem", boxShadow:"0px 10px 30px rgba()0,0,0,0.5"}}>
            <motion.h2 layout="position">Snow Leopards</motion.h2>
         
            {isOpen3 && (
            <motion.div className="open" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}} exit={{opacity: 0}}>
                <p>
                    Snow Leopards is one of many endangered animals.
                    There are many reasons why they endangered:
                </p>
                <p>
                    People hunt Snow Leopards for their fur and bones
                </p>

                <p>
                    People hunt Snow Leopards for their fur and bones
                </p>

                <p>
                    They lose their homes due to people creating their own homes and climate change melting ice away.
                </p>

                <p>
                    There are around 4,000 to 6,300 Snow Leopards left.
                </p>
            </motion.div>
            )}

    </motion.div>

    </div>


    <style>
        {`
         .app_4 {
            min-height: 10px
            display: flex
            justify-content: center;
            align-items: center;
         }

         .card_4 {
            background: linear-gradient(to right, #FFA500, #000000);
            padding: 3rem 5rem;
        }
        

         .card_4 p {
            padding-top: 1rem;
            line-height: 150%
         }
        `}
      </style>

    <div className="app_4">
        <motion.div transition={{layout: {duration: 1, type:"spring"}}} layout onClick={toggleCard4} className="card_4" 
        style={{borderRadius: "1rem", boxShadow:"0px 10px 30px rgba()0,0,0,0.5"}}>
            <motion.h2 layout="position">Tigers</motion.h2>
         
            {isOpen4 && (
            <motion.div className="open_4" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}} exit={{opacity: 0}}>
                <p>
                    Different types of Tigers is one of many endangered animals.
                    There are many reasons why they endangered:    
                </p>
                
                <p>
                    Around 150 Tigers get hunted down by People 
                </p>

                <p>
                    There is already 3 extinct Tigers 
                </p>

                <p>
                    As of today, there is only 4,500 Tigers left
                </p>
            </motion.div>
            )}

    </motion.div>

    </div>
        
    <style>
        {`
         .app_5 {
            min-height: 10px
            display: flex
            justify-content: center;
            align-items: center;
         }

         .card_5 {
            background: linear-gradient(to bottom, #4CAF50, #2E7D32, #689F38); /* Example gradient of mixed green shades */
            padding: 3rem 5rem;
            /* Additional styles */
        }
        

         .card_5 p {
            padding-top: 1rem;
            line-height: 150%
         }
        `}
      </style>
    
    <div className="app_5">
        <motion.div transition={{layout: {duration: 1, type:"spring"}}} layout onClick={toggleCard5} className="card_5" 
        style={{borderRadius: "1rem", boxShadow:"0px 10px 30px rgba()0,0,0,0.5"}}>
            <motion.h2 layout="position">Turtles</motion.h2>
         
            {isOpen5 && (
            <motion.div className="open_5" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}} exit={{opacity: 0}}>
                <p>
                    Turtles is one of many endangered animals.
                    There are many reasons why they endangered:   
                </p>

                <p>
                    People throw litter in the sea which can trap turtles
                </p>
                
                <p>
                    People also hunt turtles for their eggs, meat and skin
                </p>

                <p>
                    There 6.5 million sea turtles left in the world and each year 250,000 turtles get hunted on
                </p>
            </motion.div>
            )}

    </motion.div>

    </div>
    </>
    )
}

export default animal