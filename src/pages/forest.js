import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import TextAnimation from "@/components/TextAnimation";
import Link from "next/link";

const forest = () =>{



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
            background: green;
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
            <motion.h2 layout="position"> Why is less trees in the rainforest bad?</motion.h2>
         
            {isOpen1 && (
            <motion.div className="open" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}} exit={{opacity: 0}}>

                <p>
                    This will increase temperature
                </p>

                <p>
                  loss of food and homes for animals who live there
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
            background: green;
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
            <motion.h2 layout="position">Why shouldn't we cut the rainforest?</motion.h2>
         
            {isOpen2 && (
            <motion.div className="open_2" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}} exit={{opacity: 0}}>
                <p>
                  trees take in carbon dioxide which in return gives us oxygen
                  for breathing
                </p>
                <p>
                    Keeping the trees will help the animals live
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
            background: green;
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
            <motion.h2 layout="position">What will happen in the future?</motion.h2>
         
            {isOpen3 && (
            <motion.div className="open" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}} exit={{opacity: 0}}>
                <p> 
                    By 2050 there could be about 40% of the rainforest destroyed

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
            background: green;
            padding: 3rem 5rem
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
            <motion.h2 layout="position">How many animals live in the forest</motion.h2>
         
            {isOpen4 && (
            <motion.div className="open_4" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}} exit={{opacity: 0}}>
                <p>
                  1,300 different birds
                </p>

                <p>
                  400 different monkeys
                </p>

                <p>
                  427 dffferent mammals
                </p>

                <p>
                  378 different reptiles
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
            background: green;
            padding: 3rem 5rem
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
            <motion.h2 layout="position">What can you do to stop this?</motion.h2>
         
            {isOpen5 && (
            <motion.div className="open_5" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}} exit={{opacity: 0}}>
                <p>
                  Plant more trees  
                </p>

                <p>
                  Always recycle your products
                </p>
                
            </motion.div>
            )}

    </motion.div>

    </div>
    </>
    )
}

export default forest