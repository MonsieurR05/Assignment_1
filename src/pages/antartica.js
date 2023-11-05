import React from "react";
import {  motion } from "framer-motion";
import { useState } from "react";
import TextAnimation from "@/components/TextAnimation";

const antartica = () =>{


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
        top: '5vh',
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
            background: linear-gradient(to bottom right, #c7e7ff, #FFFFFF);
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
            <motion.h2 layout="position">Why is ice melting away?</motion.h2>
         
            {isOpen1 && (
            <motion.div className="open" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}} exit={{opacity: 0}}>
                <p>
                    Global Warming has increased the temperature
                </p>
                <p>
                  People are the main cause of this as they produce too much bad gas which pollutes the sky.
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
            background: linear-gradient(to bottom right, #c7e7ff, #FFFFFF);
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
            <motion.h2 layout="position">Why is ice melting a big issue?</motion.h2>
         
            {isOpen2 && (
            <motion.div className="open_2" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}} exit={{opacity: 0}}>
                <p> 
                    This could lead to less water for people to drink
                </p>
                <p>
                    If all the ice melts, sea level will rise by 70 meters meaning some places could be covered in water
                </p>

                <p>
                  animals like Pengiuns and Seals could lose their homes
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
            background: linear-gradient(to bottom right, #c7e7ff, #FFFFFF);
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
            <motion.h2 layout="position">How much has melted away?</motion.h2>
         
            {isOpen3 && (
            <motion.div className="open" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}} exit={{opacity: 0}}>
                <p> 
                   About 150 million metric tons of ice melts a year which is the same as 27 million elephants.
                </p>
                <p>
                   
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
          background: linear-gradient(to bottom right, #c7e7ff, #FFFFFF);
          padding: 3rem 5rem;
      }
      

         .card_4 p {
            padding-top: 1rem;
            line-height: 150%;
            color: black
         }
        `}
      </style>

    <div className="app_4">
        <motion.div transition={{layout: {duration: 1, type:"spring"}}} layout onClick={toggleCard4} className="card_4" 
        style={{borderRadius: "1rem", boxShadow:"0px 10px 30px rgba()0,0,0,0.5"}}>
            <motion.h2 layout="position">Emperor Pengiuns</motion.h2>
         
            {isOpen4 && (
            <motion.div className="open_4" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}} exit={{opacity: 0}}>
                <p> 
                  Theres a chance of Emperor Pengiuns to go extinct by 2050 
                </p>
                <p>
                  In 2022 it was found that Emperor Pengiuns had trouble making baby pengiuns because of less sea ice
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
            background: linear-gradient(to bottom right, #c7e7ff, #FFFFFF);
            padding: 3rem 5rem
         }

         .card_5 p {
            padding-top: 1rem;
            line-height: 170%;
            color: black;
         }
        `}
      </style>
    
    <div className="app_5">
        <motion.div transition={{layout: {duration: 1, type:"spring"}}} layout onClick={toggleCard5} className="card_5" 
        style={{borderRadius: "1rem", boxShadow:"0px 10px 30px rgba()0,0,0,0.5"}}>
            <motion.h2 layout="position">What should you do to stop this?</motion.h2>
         
            {isOpen5 && (
            <motion.div className="open_5" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}} exit={{opacity: 0}}>
                <p>
                  Should stop burning fossil fuels as they are bad gasses for the atmosphere
                    
                </p>

                <p>
                  Drive less and walk more or take public transport like a bus or a train
                </p>
                
            </motion.div>
            )}

    </motion.div>

    </div>
    </>
    )
}

export default antartica