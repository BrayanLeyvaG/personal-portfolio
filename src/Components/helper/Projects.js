import React from 'react';
import proj1 from '../../img/proj1.jpg'
import proj2 from '../../img/proj2.jpg'
import proj3 from '../../img/proj3.jpg'
import proj4 from '../../img/proj4.jpg'
import proj5 from '../../img/proj5.jpg'
import proj6 from '../../img/proj6.jpg'


export const Projects = () => {
  return (
    <div className='projects-box'>
        <div className='div-port'>
          <img src={proj5} alt='PokeDex'></img>
          <div className='image-overlay port-btns'>
            <h5>Gastelek</h5>
            <p>Full page for a real company.</p>
            <p><i className="uil uil-wordpress-simple"></i></p>
            <div className='port-btns'>
              <a href='https://www.gastelek.com/' target='_blank'><button>Demo</button></a>
            </div>
          </div>
        </div>
        <div className='div-port'>
          <img src={proj1} alt='PokeDex'></img>
          <div className='image-overlay port-btns'>
            <h5>PokeDex</h5>
            <p>Search a Pokemon.</p>
            <p><i className="uil uil-html5-alt"></i> <i className="uil uil-css3-simple"></i> <i className="uil uil-java-script"></i></p>
            <div className='port-btns'>
              <a href='https://brayanleyvag.github.io/PokeDex/' target='_blank'><button>Demo</button></a>
              <a href='https://github.com/BrayanLeyvaG/PokeDex' target='_blank'><button>Code</button></a>
            </div>
          </div>
        </div>
        <div className='div-port'>
          <img src={proj2} alt='GifApp'></img>
          <div className='image-overlay port-btns'>
            <h5>GifApp</h5>
            <p>Search and display gifs.</p>
            <p><i className="uil uil-html5-alt"></i> <i className="uil uil-css3-simple"></i> <i className="uil uil-java-script"></i> <i className="uil uil-react"></i></p>
            <div className='port-btns'>
              <a href='https://brayanleyvag.github.io/gif-app/' target='_blank'><button>Demo</button></a>
              <a href='https://github.com/BrayanLeyvaG/gif-app' target='_blank'><button>Code</button></a>
            </div>
          </div>
        </div>
        <div className='div-port'>
          <img src={proj3} alt='Email sending simulator'></img>
          <div className='image-overlay port-btns'>
            <h5>Email sending</h5>
            <p>Simulate sending an email.</p>
            <p><i className="uil uil-html5-alt"></i> <i className="uil uil-java-script"></i> <i className="uil uil-bold"></i></p>
            <div className='port-btns'>
              <a href='https://send-email-s.netlify.app/' target='_blank'><button>Demo</button></a>
              <a href='https://github.com/BrayanLeyvaG/simulating-send-email' target='_blank'><button>Code</button></a>
            </div>
          </div>
        </div>
        <div className='div-port'>
          <img src={proj4} alt='Shopping Cart project'></img>
          <div className='image-overlay port-btns'>
            <h5>Shopping Cart</h5>
            <p>Simulate adding items to cart.</p>
            <p><i className="uil uil-java-script"></i></p>
            <div className='port-btns'>
              <a href= 'https://practica-carrito-blg.netlify.app/' target='_blank'><button>Demo</button></a>
              <a href='https://github.com/BrayanLeyvaG/practica-carrito' target='_blank'><button>Code</button></a>
            </div>
          </div>
        </div>
        <div className='div-port'>
          <img src={proj6} alt='Shopping Cart project'></img>
          <div className='image-overlay port-btns'>
            <h5>car finder</h5>
            <p>Search for a car by options.</p>
            <p><i className="uil uil-java-script"></i></p>
            <div className='port-btns'>
              <a href= 'https://buscador-autos-blg.netlify.app/' target='_blank'><button>Demo</button></a>
              <a href='https://github.com/BrayanLeyvaG/Buscadordeautos' target='_blank'><button>Code</button></a>
            </div>
          </div>
        </div>      
    </div>
    );
};
