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
              <div className='back-i'><i className="fab fa-git-alt git-icon"></i><p>Git</p></div>
              <div className='back-i'><i className="fab fa-html5 html5"></i><p>HTML</p></div>
              <div className='back-i'><i className="fab fa-css3-alt css3"></i><p>CSS</p></div>
              <div className='back-i'><i className="fab fa-js-square javas"></i><p>JavaScript</p></div>
              <div className='back-i'><i className="fab fa-react react"></i><p>React</p></div>
              <div className='back-i'>
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="80" height="80" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="#44a8b3" d="M9 13.7q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1q-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1Zm-7 8.4q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1q-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1Z"/></svg>
              <p>Tailwind</p></div>
              <div className='back-i'>
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="80" height="80" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="rgb(51, 153, 255)" d="M20.229 15.793a.666.666 0 0 0 .244-.243a.666.666 0 0 0 .09-.333l.012-3.858a.666.666 0 0 1 .09-.333a.666.666 0 0 1 .245-.243L23 9.58a.667.667 0 0 1 .333-.088a.667.667 0 0 1 .333.09a.667.667 0 0 1 .244.243a.666.666 0 0 1 .089.333v7.014a.667.667 0 0 1-.335.578l-7.893 4.534a.666.666 0 0 1-.662 0l-6.194-3.542a.667.667 0 0 1-.246-.244a.667.667 0 0 1-.09-.335v-3.537c0-.004.004-.006.008-.004s.008 0 .008-.005v-.004c0-.003.002-.005.004-.007l5.102-2.93c.004-.003.002-.01-.003-.01a.005.005 0 0 1-.004-.002a.005.005 0 0 1-.001-.004l.01-3.467a.667.667 0 0 0-.333-.58a.667.667 0 0 0-.667 0L8.912 9.799a.667.667 0 0 1-.665 0l-3.804-2.19a.667.667 0 0 0-.999.577v6.267a.667.667 0 0 1-.332.577a.666.666 0 0 1-.332.09a.667.667 0 0 1-.333-.088L.336 13.825a.667.667 0 0 1-.246-.244a.667.667 0 0 1-.09-.336L.019 2.292a.667.667 0 0 1 .998-.577l7.23 4.153a.667.667 0 0 0 .665 0l7.228-4.153a.666.666 0 0 1 .333-.088a.666.666 0 0 1 .333.09a.667.667 0 0 1 .244.244a.667.667 0 0 1 .088.333V13.25c0 .117-.03.232-.089.334a.667.667 0 0 1-.245.244l-3.785 2.18a.667.667 0 0 0-.245.245a.666.666 0 0 0-.089.334a.667.667 0 0 0 .09.334a.666.666 0 0 0 .247.244l2.088 1.189a.67.67 0 0 0 .33.087a.667.667 0 0 0 .332-.089l4.457-2.56Zm.438-9.828a.666.666 0 0 0 .09.335a.666.666 0 0 0 .248.244a.667.667 0 0 0 .67-.008l2.001-1.2a.666.666 0 0 0 .237-.243a.667.667 0 0 0 .087-.329V2.32a.667.667 0 0 0-.091-.335a.667.667 0 0 0-.584-.33a.667.667 0 0 0-.334.094l-2 1.2a.666.666 0 0 0-.238.243a.668.668 0 0 0-.086.329v2.445Z"/></svg>
              <p>Mui (Material UI)</p></div>
              <div className='back-i'>
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="80" height="80" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 351"><defs><filter id="svgIDb" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceAlpha" result="shadowBlurInner1" stdDeviation="17.5"/><feOffset in="shadowBlurInner1" result="shadowOffsetInner1"/><feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2="-1" k3="1" operator="arithmetic" result="shadowInnerInner1"/><feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/></filter><filter id="svgIDd" width="200%" height="200%" x="-50%" y="-50%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceAlpha" result="shadowBlurInner1" stdDeviation="3.5"/><feOffset dx="1" dy="-9" in="shadowBlurInner1" result="shadowOffsetInner1"/><feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2="-1" k3="1" operator="arithmetic" result="shadowInnerInner1"/><feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"/></filter><path id="svgIDa" d="m1.253 280.732l1.605-3.131l99.353-188.518l-44.15-83.475C54.392-1.283 45.074.474 43.87 8.188L1.253 280.732Z"/><path id="svgIDc" d="m134.417 148.974l32.039-32.812l-32.039-61.007c-3.042-5.791-10.433-6.398-13.443-.59l-17.705 34.109l-.53 1.744l31.678 58.556Z"/></defs><path fill="#FFC24A" d="m0 282.998l2.123-2.972L102.527 89.512l.212-2.017L58.48 4.358C54.77-2.606 44.33-.845 43.114 6.951L0 282.998Z"/><use fill="#FFA712" fillRule="evenodd" href="#svgIDa"/><use filter="url(#svgIDb)" href="#svgIDa"/><path fill="#F4BD62" d="m135.005 150.38l32.955-33.75l-32.965-62.93c-3.129-5.957-11.866-5.975-14.962 0L102.42 87.287v2.86l32.584 60.233Z"/><use fill="#FFA50E" fillRule="evenodd" href="#svgIDc"/><use filter="url(#svgIDd)" href="#svgIDc"/><path fill="#F6820C" d="m0 282.998l.962-.968l3.496-1.42l128.477-128l1.628-4.431l-32.05-61.074z"/><path fill="#FDE068" d="m139.121 347.551l116.275-64.847l-33.204-204.495c-1.039-6.398-8.888-8.927-13.468-4.34L0 282.998l115.608 64.548a24.126 24.126 0 0 0 23.513.005"/><path fill="#FCCA3F" d="M254.354 282.16L221.402 79.218c-1.03-6.35-7.558-8.977-12.103-4.424L1.29 282.6l114.339 63.908a23.943 23.943 0 0 0 23.334.006l115.392-64.355Z"/><path fill="#EEAB37" d="M139.12 345.64a24.126 24.126 0 0 1-23.512-.005L.931 282.015l-.93.983l115.607 64.548a24.126 24.126 0 0 0 23.513.005l116.275-64.847l-.285-1.752l-115.99 64.689Z"/></svg>
              <p>Firebase</p></div>
              
          </motion.div>
        <div className='separator'></div>
      </div>
  </div>
  );
};
