import React from 'react';
import proj1 from '../../img/proj1.png'
import proj2 from '../../img/proj2.png'
import proj3 from '../../img/project-to-do.png'
import proj4 from '../../img/proj4.png'
import proj5 from '../../img/proj5.jpg'
import proj6 from '../../img/proj-insta.png'




export const Projects = () => {
  const muiIcon = <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1.3em" height="1.3em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M20.229 15.793a.666.666 0 0 0 .244-.243a.666.666 0 0 0 .09-.333l.012-3.858a.666.666 0 0 1 .09-.333a.666.666 0 0 1 .245-.243L23 9.58a.667.667 0 0 1 .333-.088a.667.667 0 0 1 .333.09a.667.667 0 0 1 .244.243a.666.666 0 0 1 .089.333v7.014a.667.667 0 0 1-.335.578l-7.893 4.534a.666.666 0 0 1-.662 0l-6.194-3.542a.667.667 0 0 1-.246-.244a.667.667 0 0 1-.09-.335v-3.537c0-.004.004-.006.008-.004s.008 0 .008-.005v-.004c0-.003.002-.005.004-.007l5.102-2.93c.004-.003.002-.01-.003-.01a.005.005 0 0 1-.004-.002a.005.005 0 0 1-.001-.004l.01-3.467a.667.667 0 0 0-.333-.58a.667.667 0 0 0-.667 0L8.912 9.799a.667.667 0 0 1-.665 0l-3.804-2.19a.667.667 0 0 0-.999.577v6.267a.667.667 0 0 1-.332.577a.666.666 0 0 1-.332.09a.667.667 0 0 1-.333-.088L.336 13.825a.667.667 0 0 1-.246-.244a.667.667 0 0 1-.09-.336L.019 2.292a.667.667 0 0 1 .998-.577l7.23 4.153a.667.667 0 0 0 .665 0l7.228-4.153a.666.666 0 0 1 .333-.088a.666.666 0 0 1 .333.09a.667.667 0 0 1 .244.244a.667.667 0 0 1 .088.333V13.25c0 .117-.03.232-.089.334a.667.667 0 0 1-.245.244l-3.785 2.18a.667.667 0 0 0-.245.245a.666.666 0 0 0-.089.334a.667.667 0 0 0 .09.334a.666.666 0 0 0 .247.244l2.088 1.189a.67.67 0 0 0 .33.087a.667.667 0 0 0 .332-.089l4.457-2.56Zm.438-9.828a.666.666 0 0 0 .09.335a.666.666 0 0 0 .248.244a.667.667 0 0 0 .67-.008l2.001-1.2a.666.666 0 0 0 .237-.243a.667.667 0 0 0 .087-.329V2.32a.667.667 0 0 0-.091-.335a.667.667 0 0 0-.584-.33a.667.667 0 0 0-.334.094l-2 1.2a.666.666 0 0 0-.238.243a.668.668 0 0 0-.086.329v2.445Z"/></svg>
  const firebaseIcon = <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1.3em" height="1.3em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M5.239 15.063L7.21 2.381a.453.453 0 0 1 .847-.145l2.12 3.979l-4.938 8.848zM19.24 18.14L17.363 6.469a.454.454 0 0 0-.766-.246L4.76 18.14l6.55 3.691c.411.23.912.23 1.323 0l6.607-3.691zM13.917 7.955L12.4 5.052a.452.452 0 0 0-.8 0L4.939 16.989l8.978-9.034z"/></svg>
  
  
  return (
    <div className='projects-box'>
        <div className='div-port'>
          <img src={proj2} alt='PokeDex Image'></img>
          <div className='image-overlay port-btns'>
            <h5>Pokedex</h5>
            <p className='p-description'>See your favorite pokemon information.</p>
            <p><i className="uil uil-html5-alt"></i> <i className="uil uil-css3-simple"></i> <i className="uil uil-react"></i></p>
            <div className='port-btns'>
              <a href='https://pokedex-blg.netlify.app/' target='_blank'><button>Demo</button></a>
              <a href='https://github.com/BrayanLeyvaG/pokedex-react' target='_blank'><button>Code</button></a>
            </div>
          </div>
        </div>
        <div className='div-port'>
          <img src={proj6} alt='Instagrom CRUD App'></img>
          <div className='image-overlay port-btns'>
            <h5>Instagrom CRUD</h5>
            <p className='p-description'>C.R.U.D using Firebase & Mui (Material UI).</p>
            <p><i className="uil uil-html5-alt"></i> <i className="uil uil-react"></i> <i className="uil uil-css3-simple"></i> {muiIcon} {firebaseIcon}</p>
            <div className='port-btns'>
              <a href= 'https://instagrom-firebase.netlify.app/' target='_blank'><button>Demo</button></a>
              <a href='https://github.com/BrayanLeyvaG/CRUD-firebase' target='_blank'><button>Code</button></a>
            </div>
          </div>
        </div>      
        <div className='div-port'>
          <img src={proj3} alt='To-Do list'></img>
          <div className='image-overlay port-btns'>
            <h5>To-Do App</h5>
            <p className='p-description'>C.R.U.D. using react-hook-form & http requests.</p>
            <p><i className="uil uil-html5-alt"></i> <i className="uil uil-css3-simple"></i> <i className="uil uil-react"></i></p>
            <div className='port-btns'>
              <a href='https://todoapp-crud.netlify.app/' target='_blank'><button>Demo</button></a>
              <a href='https://github.com/BrayanLeyvaG/ToDo-CRUD' target='_blank'><button>Code</button></a>
            </div>
          </div>
        </div>
        <div className='div-port'>
          <img src={proj4} alt='Shopping Cart project'></img>
          <div className='image-overlay port-btns'>
            <h5>DigitalLab</h5>
            <p className='p-description'>Landing page.</p>
            <p><i className="uil uil-html5-alt"></i> <i className="uil uil-css3-simple"></i> <i className="uil uil-react"></i></p>
            <div className='port-btns'>
              <a href= 'https://digitallab.netlify.app/' target='_blank'><button>Demo</button></a>
              <a href='https://github.com/BrayanLeyvaG/digitallab' target='_blank'><button>Code</button></a>
            </div>
          </div>
        </div>
        <div className='div-port'>
          <img src={proj1} alt='PokeDex'></img>
          <div className='image-overlay port-btns'>
            <h5>Rick and Morty App</h5>
            <p className='p-description'>Look for all the Rick and Morty's worlds by their ID.</p>
            <p><i className="uil uil-html5-alt"></i> <i className="uil uil-css3-simple"></i> <i className="uil uil-java-script"></i> <i className="uil uil-react"></i></p>
            <div className='port-btns'>
              <a href='https://rickandmorty-blg.netlify.app/' target='_blank'><button>Demo</button></a>
              <a href='https://github.com/BrayanLeyvaG/rick-and-morty' target='_blank'><button>Code</button></a>
            </div>
          </div>
        </div>
        <div className='div-port'>
          <img src={proj5} alt='Gastelek landing page'></img>
          <div className='image-overlay port-btns'>
            <h5>Gastelek</h5>
            <p className='p-description'>Full page.</p>
            <p><i className="uil uil-wordpress-simple"></i></p>
            <div className='port-btns'>
              <a href='https://www.gastelek.com/' target='_blank'><button>Demo</button></a>
            </div>
          </div>
        </div>
    </div>
    );
};
