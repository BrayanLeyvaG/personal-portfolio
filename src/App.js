import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ContactMe } from './Components/ContactMe';
import { Header } from './Components/Header';
import { ScrollToTop } from './Components/helper/ScrollToTop';
import { Hero } from './Components/Hero';
import { Portfolio } from './Components/Portfolio';
import { Skills } from './Components/Skills';
import { AboutMe } from './Components/AboutMe';

function App() {

  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollHeight(position);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight]);

  return (
    <motion.div initial='hidden' animate='show'>
      <ScrollToTop/>
      <div className='main'>
        <Header isScrolling={scrollHeight}/>
        <Hero/>
      </div>
      <AboutMe/>
      <Skills/>
      <Portfolio/>
      <ContactMe/>
    </motion.div>
  );
}

export default App;
