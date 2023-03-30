import React from 'react';
import projFoto from '../images/p1foto.jpg';
import YelpCamp from '../images/yelpcamp.png';
import GitHubLogo from '../images/github-mark.svg';
import wwwwLogo from '../images/www.svg';

export default function Projects() {
  return (
    <div className='projects' id='Projects'>
      <h2>Projects</h2>
      <section className='projects_container'>
        <div className='project_card'>
          <img src={YelpCamp} alt='' />
          <h2>YelpCamp</h2>
          <p>
            YelpCamp project is designated to find, create, edit, rate and interact with campsites across the United
            States of America. It has full authentication and authorization. Back End with MongoDB and Express.
            <br />
            <br />
            Have some patients, while it loads it's my first website ever.
          </p>
          <p>
            <b>Tools used:</b>
          </p>
          <p>JavaScript, HTML5, CSS, Node.js, Express, MongoDB</p>
          <a href='https://github.com/MatasRag1/YelpCamp.git' target='_blank'>
            <button>
              GitHub <img className='button_icon' src={GitHubLogo} width='25px' />
            </button>
          </a>
          <a href='https://mryelpcamp.onrender.com/' target='_blank'>
            <button>
              View Site <img className='button_icon' src={wwwwLogo} width='22px' />
            </button>
          </a>
        </div>
        <div className='project_card'>
          <img src={projFoto} alt='' />
          <h2>Project 2</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolorum facilis ex voluptatum quibusdam dolorem
            ipsam! Sunt ab eligendi, minus ea alias sed, atque cumque voluptatibus rem, facilis doloribus nulla! lor
          </p>
          <p>
            <b>Tools used:</b>
          </p>
          <p>React, JavaScript, HTML5, CSS, Node.js, Express</p>
          <a href='https://github.com/MatasRag1' target='_blank'>
            <button>
              GitHub <img className='button_icon' src={GitHubLogo} width='25px' />
            </button>
          </a>
          <a href='https://google.com' target='_blank'>
            <button>
              View Site <img className='button_icon' src={wwwwLogo} width='22px' />
            </button>
          </a>
        </div>
        <div className='project_card'>
          <img src={projFoto} alt='' />
          <h2>Project 3</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolorum facilis ex voluptatum quibusdam dolorem
            ipsam! Sunt ab eligendi, minus ea alias sed, atque cumque voluptatibus rem, facilis doloribus nulla! lor
          </p>
          <p>
            <b>Tools used:</b>
          </p>
          <p>React, JavaScript, HTML5, CSS, Node.js, Express</p>
          <a href='https://github.com/MatasRag1' target='_blank'>
            <button>
              GitHub <img className='button_icon' src={GitHubLogo} width='25px' />
            </button>
          </a>
          <a href='https://google.com' target='_blank'>
            <button>
              View Site <img className='button_icon' src={wwwwLogo} width='22px' />{' '}
            </button>
          </a>
        </div>
        <div className='project_card'>
          <img src={projFoto} alt='' />
          <h2>Project 4</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolorum facilis ex voluptatum quibusdam dolorem
            ipsam! Sunt ab eligendi, minus ea alias sed, atque cumque voluptatibus rem, facilis doloribus nulla! lor
          </p>
          <p>
            <b>Tools used:</b>
          </p>
          <p>React, JavaScript, HTML5, CSS, Node.js, Express</p>
          <a href='https://github.com/MatasRag1' target='_blank'>
            <button>
              GitHub <img className='button_icon' src={GitHubLogo} width='25px' />
            </button>
          </a>
          <a href='https://google.com' target='_blank'>
            <button>
              View Site <img className='button_icon' src={wwwwLogo} width='22px' />
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
