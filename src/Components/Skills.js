import React from 'react';
import { motion } from 'framer-motion';
import {revealS,titleAnimation} from '../Animation.js'
import { useScroll } from './helper/useScroll.js';

export const Skills = () => {
  const [element, controls] = useScroll();
  return (
  <div className='skills' id='skills' ref={element}>
      <motion.div
        className='div-titles'         
        animate={controls}
        variants={titleAnimation}
        transition={{delay:0.2, siffness: 200}}
      ><p className='titles'>Skills</p>
      </motion.div>
      <div>
        <div className='separator'></div>
          <motion.div className='skill-box'
          animate={controls}
          variants={revealS}
          transition={{delay:0.2, siffness: 200}}>
              <div className='back-i'><i className="uil uil-html5-alt"></i><p>HTML</p></div>
              <div className='back-i'><i className="uil uil-css3-simple"></i><p>CSS</p></div>
              <div className='back-i'><i className="uil uil-java-script"></i><p>JavaScript</p></div>
              <div className='back-i'><i className="uil uil-react"></i><p>React</p></div>
          </motion.div>
        <div className='separator'></div>
      </div>
  </div>
  );
};
