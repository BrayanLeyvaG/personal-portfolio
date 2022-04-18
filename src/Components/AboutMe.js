import React from 'react';
import { motion } from 'framer-motion';
import {imageAnimation} from '../Animation.js'
import { useScroll } from './helper/useScroll.js';

export const AboutMe = () => {
    const [element, controls] = useScroll()
  return (
    <div className='about-me' id='about-me' ref={element}>
        <motion.div 
        variants={imageAnimation} animate={controls} transition={{ ease: "easeIn", duration: .5 }}
        >
            <p className='titles title-me'>About me</p>
            <div className='about-container'>
                <div className='me-1'>
                    <div className='am-img'></div>
                    <p>I am dedicated and creative, constantly looking to improve personally and professionally. I am motivated by constant learning, currently I like working with <span className='react'>React</span>.</p>
                </div>
                <div className='me-2'>
                    <div className='am-ed'>
                        <p className='am-e'>Education</p>
                        <div className='am-p'><p className='am-year'>2016 - 2020</p><p><i class="fas fa-graduation-cap"></i> Bachelor's Degree in Industrial Engineering at <a href='https://www.uanl.mx/'>UANL</a></p></div>
                        <div className='am-p'><p className='am-year'>2021 - (Currently)</p><p><i class="fas fa-laptop-code"></i> Full-Stack Developer student at <a href='https://www.academlo.com/'>Academlo</a></p></div>
                    </div>
                    <div className='am-ex'>
                        <p className='am-e'>Experience</p>
                        <div className='am-p'><p className='am-year'>2019</p><p><i class="fas fa-briefcase"></i> Scheduling Intern at <a href='https://www.haldex.com/'>Haldex</a></p></div>
                        <div className='am-p'><p className='am-year'>2020 - 2021</p><p><i class="fas fa-briefcase"></i> Quality Assurance Engineer at <a href='https://www.navistar.com/'>Navistar</a></p></div>
                    </div>
                </div>
            </div>
        </motion.div>
        <div className='separator'></div>
    </div>
  )
}
