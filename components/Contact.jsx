import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_svjh2ux', 'template_2i3qbfw', e.target, 'WCKYmaNkqqE0hAjvh').then(
      result => {
        console.log(result.text);
      },
      error => {
        console.log(error.text);
      }
    );
    e.target.reset();
  }

  return (
    <div className='contact' id='Contact'>
      <h2>Contact Me</h2>
      <section className='form_wrapper'>
        <form className='form' onSubmit={sendEmail}>
          <h3>Get In Touch</h3>
          <label htmlFor='firstname'>First name:</label>
          <input type='text' id='firstname' placeholder='Your First Name' required />
          <label htmlFor='lastname'>Last name:</label>
          <input type='text' id='lastname' name='lastname' placeholder='Your Last Name' required />
          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' name='email' placeholder='Your@email.com' required />
          <label htmlFor='subject'>Subject</label>
          <input type='text' name='subject' id='subject' placeholder='Subject of interest' />
          <label htmlFor='message'>Message:</label>
          <textarea name='message' id='message' cols='30' rows='4' placeholder='Your message to me'></textarea>
          <button type='submit'>Send it!</button>
        </form>
      </section>
    </div>
  );
}
