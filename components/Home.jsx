import React from 'react';
import { useEffect } from 'react';

export default function Home() {
  const letters = 'abcdefghjklmnopqrstuvwxyz';
  // 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let interval = null;

  useEffect(() => {
    document.querySelector('span').onmouseover = event => {
      let iteration = 0;

      clearInterval(interval);

      interval = setInterval(() => {
        event.target.innerText = event.target.innerText
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return event.target.dataset.value[index];
            }

            return letters[Math.floor(Math.random() * 20)];
          })
          .join('');

        if (iteration >= event.target.dataset.value.length) {
          clearInterval(interval);
        }

        iteration += 1 / 2;
      }, 30);
    };
  }, []);
  return (
    <div className='home' id='Home'>
      <h1 className='home_title'>
        Hello, I'm <span data-value='Matas Ragauskas'> Matas Ragauskas</span>
      </h1>
      <p className='home_text'>I am front-end developer from Lithuania</p>
      <a href='#Contact'>
        <button className='cta'>Get in touch</button>
      </a>
    </div>
  );
}
