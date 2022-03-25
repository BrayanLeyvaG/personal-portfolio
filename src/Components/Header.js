import React, { useState } from 'react';

export const Header = ({isScrolling}) => {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const navbarToggler = () => {
    setToggleNavbar(!toggleNavbar)
  }

  return (
    <div className={`navbar ${toggleNavbar === true ? 'active':''} ${isScrolling > 10 ? 'scrolling' : ''}`}>
      <div className='collapseble-button'>
        {!toggleNavbar ? (
          <i className="uil uil-bars" onClick={navbarToggler}></i>
        ):(
          <i className="uil uil-multiply" onClick={navbarToggler}></i>
        )}
      </div>
      <nav>
        <div className='links-nav'>
          <ul className='ul-nav'>
              <li><a href='#home' onClick={navbarToggler} className='header-links'>Home</a></li>
              <li><a href='#skills' onClick={navbarToggler} className='header-links'>Skills</a></li>
              <li><a href='#portfolio' onClick={navbarToggler} className='header-links'>Portfolio</a></li>
              <li><a href='#contactme' onClick={navbarToggler} className='header-links hdcm'>Contact me</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
