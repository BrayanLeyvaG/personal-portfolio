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
        transition={{delay:0.1, siffness: 200}}
      ><p className='titles'>Skills</p>
      </motion.div>
      <div>
        <div className='separator'></div>
          <motion.div className='skill-box'
          animate={controls}
          variants={revealS}
          transition={{delay:0.1, siffness: 200}}>
              <div className='back-i'><i className="fab fa-html5 html5"></i><p>HTML</p></div>
              <div className='back-i'><i className="fab fa-css3-alt css3"></i><p>CSS</p></div>
              <div className='back-i'><i className="fab fa-js-square javas"></i><p>JavaScript</p></div>
              <div className='back-i'><i className="fab fa-react react"></i><p>React</p></div>
              <div className='back-i'><i class="fab fa-wordpress-simple wordpress"></i><p>Wordpress</p></div>
              <div className='back-i'><i className="fab fa-git-alt git-icon"></i><p>Git</p></div>
              
          </motion.div>
        <div className='separator'></div>
      </div>
  </div>
  );
};
