import React from 'react';
import { ContactForm } from './helper/ContactForm';
import CV from '../img/CV.pdf'


export const ContactMe = () => {
  return (
    <div className='main-main-contact'>
        <h3 className='contac-text'>Contact me</h3>
        <div className='contact-main'>
            <div className='form-contact'>
            <ContactForm/>
            </div>

            <div className='footer-icons'>
                <a href='mailto:brayanleyvag@gmail.com' target='_blank' className='i-email'><i className="uil uil-envelope"></i><span>Email</span></a>
                <a href='https://www.linkedin.com/in/brayan-leyva-gast%C3%A9lum-a097b5158/' target='_blank' className='i-linkedin'><i className="uil uil-linkedin-alt"></i><span>LinkedIn</span></a>
                <a href='https://github.com/BrayanLeyvaG' className='i-github'><i className="uil uil-github-alt"></i><span>GitHub</span></a>
                <a href={CV} className='i-cv' target="_blank"><i className="uil uil-file"></i><span>CV</span></a>
            </div>
        </div>
        <div className='footer-main'>
            <div className='separator-f'></div>
            <p>Made by Brayan Leyva Gastelum</p>
        </div>
    </div>
    );
};
