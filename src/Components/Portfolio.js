import { motion } from 'framer-motion';
import React from 'react';
import { revealP, titleAnimationP } from '../Animation';
import { Projects } from './helper/Projects';
import { useScroll } from './helper/useScroll';


export const Portfolio = () => {
  const [element, controls] = useScroll();
  return (
    <div className='portfolio' id='portfolio' ref={element}>
      <div>
        <div className='separator'></div>
          <motion.div 
          className='portfolio-box'
          animate={controls}
          variants={revealP}
          transition={{delay:0.1, siffness: 200}}>
            <Projects/>
          </motion.div>
        <div className='separator' id='contactme'></div>
      </div>
      <motion.div
        className='div-titles'         
        animate={controls}
        variants={titleAnimationP}
        transition={{delay:0.1, siffness: 200}}>
      <p className='titles'>Portfolio</p>
      </motion.div>
    </div>
  );
};
