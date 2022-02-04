import React, { useState } from 'react';

export const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop
        if(scrolled>100){
            setVisible(true)
        } else if(scrolled<=300){
            setVisible(false)
        }
    };
    const scrollToTop = () => {
        window.scrollTo({top: 0}); 
    };
    window.addEventListener('scroll',toggleVisible);
  return (
      <>
        {visible && (
            <div className='scrollToTop' onClick={scrollToTop}>
                <i className="uil uil-arrow-circle-up"></i>
            </div>
        )}

      </>
  );
};
