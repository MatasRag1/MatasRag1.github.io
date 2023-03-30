import React from 'react';
import Github from '../images/github.svg';
import Linkedin from '../images/linkedin.svg';
import facebook from '../images/facebook.svg';

export default function Footer() {
  return (
    <footer className='footer'>
      <hr />
      <section className='footer--container'>
        <div className='icon--container'>
          <a href='https://github.com/MatasRag1'>
            <img src={Github} alt=''></img>
          </a>
          <a href='https://linkedin.com/in/ragauskas-matas'>
            <img src={Linkedin} alt='' />
          </a>
          <a href='https://www.facebook.com/matas.ragauskas'>
            <img src={facebook} alt='' />
          </a>
        </div>
      </section>
      <p>Built by me &#169;Matas Ragauskas 2023</p>
    </footer>
  );
}
