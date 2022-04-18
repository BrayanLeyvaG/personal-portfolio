import React from 'react';
import proj1 from '../../img/proj1.png'
import proj2 from '../../img/proj2.png'
import proj3 from '../../img/project-to-do.png'
import proj4 from '../../img/proj4.png'
import proj5 from '../../img/proj5.jpg'
import proj6 from '../../img/project-cars.png'


export const Projects = () => {
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
          <img src={proj6} alt='Shopping Cart project'></img>
          <div className='image-overlay port-btns'>
            <h5>C.R.U.D. Cars</h5>
            <p className='p-description'>C.R.U.D using controlled inputs & http requests.</p>
            <p><i className="uil uil-bold"></i> <i className="uil uil-html5-alt"></i> <i className="uil uil-react"></i></p>
            <div className='port-btns'>
              <a href= 'https://cars-crud-blg.netlify.app/' target='_blank'><button>Demo</button></a>
              <a href='https://github.com/BrayanLeyvaG/crud-cars' target='_blank'><button>Code</button></a>
            </div>
          </div>
        </div>      
        <div className='div-port'>
          <img src={proj5} alt='PokeDex'></img>
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
