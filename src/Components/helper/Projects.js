import React from 'react';
import proj1 from '../../img/proj1.jpg'
import proj2 from '../../img/proj2.jpg'
import proj3 from '../../img/proj3.jpg'
import proj4 from '../../img/proj4.jpg'


export const Projects = () => {
  return (
    <div className='projects-box'>
        <div className='div-port'>
          <a href='https://brayanleyvag.github.io/PokeDex/' target='_blank'><img src={proj1} alt='PokeDex'></img></a>
          <div className='port-btns'>
            <a href='https://brayanleyvag.github.io/PokeDex/' target='_blank'><button>Demo</button></a>
            <a href='https://github.com/BrayanLeyvaG/PokeDex' target='_blank'><button>Code</button></a>
          </div>
        </div>
        <div className='div-port'>
          <a href='https://brayanleyvag.github.io/gif-app/' target='_blank' target='_blank'><img src={proj2} alt='GifApp'></img></a>
          <div className='port-btns'>
            <a href='https://brayanleyvag.github.io/gif-app/' target='_blank'><button>Demo</button></a>
            <a href='https://github.com/BrayanLeyvaG/gif-app'><button>Code</button></a>
          </div>
        </div>
        <div className='div-port'>
          <a href='https://brayanleyvag.github.io/energy-counter/' target='_blank'><img src={proj3} alt='Energy Counter'></img></a>
          <div className='port-btns'>
            <a href='https://brayanleyvag.github.io/energy-counter/' target='_blank'><button>Demo</button></a>
            <a href='https://github.com/BrayanLeyvaG/energy-counter' target='_blank'><button>Code</button></a>
          </div>
        </div>
        <div className='div-port'>
          <a href='https://practica-carrito-blg.netlify.app/' target='_blank'><img src={proj4} alt='Shopping Cart project'></img></a>
          <div className='port-btns'>
            <a href='https://practica-carrito-blg.netlify.app/' target='_blank'><button>Demo</button></a>
            <a href='https://github.com/BrayanLeyvaG/practica-carrito' target='_blank'><button>Code</button></a>
          </div>
        </div>   
    </div>
    );
};
