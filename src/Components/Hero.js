import React from 'react';
import {motion} from 'framer-motion'
import {heroAnimation, imageAnimation} from '../Animation.js'
import {useScroll} from './helper/useScroll.js'
import CV from '../img/CV.pdf'




export function Hero() {
  const [element, controls] = useScroll();
  return (
  <div className='hero-main-main' ref={element}>
    <div className='hero-main' id='home'>
        <motion.div className='hero-lines' variants={heroAnimation} animate={controls} transition={{delay:0.2,type:'tween'}}>
          <p>Hi, I'm</p>
          <h1>Brayan Leyva Gastelum</h1>
          <h2>Frontend Developer</h2>
          <a href='#contactme'><button type='button' className='btn-contact'>Contact me <i className="uil uil-message"></i></button></a>
        </motion.div>
        <motion.div className='img-symb' variants={imageAnimation} animate={controls} transition={{type:'tween'}}>
          <div className='hero-blob' >
          </div>
          <div className='hero-icons'>
              <a href='https://www.linkedin.com/in/brayan-leyva-gast%C3%A9lum-a097b5158/' target='_blank'><i className="uil uil-linkedin-alt"></i></a>
              <a href='https://github.com/BrayanLeyvaG' target='_blank'><i className="uil uil-github-alt"></i></a>
              <a href={CV} target='_blank'><i className="uil uil-file"></i></a>
          </div>
        </motion.div>
    </div>
    <motion.p 
    className='arrow-i'
    initial={{y:-20}}
    animate={{y:0, transition:{ duration: 1, ease: 'easeIn', repeat: Infinity, repeatType: 'reverse'},
    }}
    ><a href='#skills'><i className="uil uil-angle-double-down"></i></a></motion.p>
  </div>

  );};
