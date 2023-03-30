import React from 'react';
import Foto from '../images/mano_headshot.jpg';
import reactIcon from '../images/react_icon_1.svg';
import JSicon from '../images/javascript_icon.svg';
import CssIcon from '../images/css_icon.svg';
import HTMLIcon from '../images/html_icon.svg';
import NodeIcon from '../images/node_icon.svg';
import ViteIcon from '../images/vite.svg';
import TailwindCSSIcon from '../images/tailwind_icon.svg';
import gitIcon from '../images/git_icon.svg';

export default function About() {
  return (
    <div className='about' id='About'>
      <h2> About Me</h2>
      <main className='about_main'>
        <section className='about_left'>
          <p className='about_me'>
            I'm a front-end developer who loves creating beautiful and user-friendly websites. I may be a junior
            developer, but I have a solid foundation in HTML, CSS, and JavaScript. I'm always eager to learn new
            technologies and techniques to create websites that are both visually appealing and functional.
          </p>
          <div className='tech_group_wrapper'>
            <p className='tech_group_title'> Tools that I use:</p>
            <div className='tech_group'>
              <div className='tech_item'>
                <img src={reactIcon} alt='' />
                <p> React </p>
              </div>
              <div className='tech_item'>
                <img src={JSicon} alt='' />
                <p> JavaScript</p>
              </div>
              <div className='tech_item'>
                <img src={CssIcon} alt='' />
                <p> CSS </p>
              </div>
              <div className='tech_item'>
                <img src={HTMLIcon} alt='' />
                <p> HTML </p>
              </div>
              <div className='tech_item'>
                <img src={NodeIcon} alt='' />
                <p> Node.js </p>
              </div>
              <div className='tech_item'>
                <img src={ViteIcon} width='50px' alt='' />
                <p> Vite.js </p>
              </div>

              <div className='tech_item'>
                <img src={TailwindCSSIcon} alt='' />
                <p> TailwindCSS </p>
              </div>
              <div className='tech_item'>
                <img src={gitIcon} alt='' />
                <p> Git </p>
              </div>
            </div>
          </div>
        </section>
        <section className='about_right'>
          <img className='foto' src={Foto} alt='' />
        </section>
      </main>
    </div>
  );
}
