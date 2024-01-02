// ContactMe.js

import "./ContactMe.css";
import emailjs from 'emailjs-com';
import React, { useRef } from 'react';

export default function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Validate form fields here if needed

    console.log("dddddd")

    emailjs.sendForm('service_jn5n1cm', 'template_qpgna47', form.current, 'eRVmJDPSIK7t88So4')
      .then((result) => {
        console.log('Email successfully sent',result.text);
      }, (error) => {
        console.log('Error sending email',error.text);
      });
  };

  return (
    <div>
      <div className='contact-maincontainer'>
        <h1>Contact Me</h1>
        <h4 className='contact-headingh4'>Let's Keep In Touch</h4>
        <div className='box-container'>
          <div className='image-container'>
            <h3 className='h3heading'>Get In Touch 📨</h3>
            <div className="colz">
              <div className="colz-icon">
                <a href="#">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/rinku-shivhare-4548b4250/">
                  <i className="fa fa-linkedin-square"></i>
                </a>
              </div>
            </div>
            <img src={require('../../assets/Home/mailz.jpeg')} alt='No internet connection' />
          </div>
          <div className='form-container'>
            <form ref={form} onSubmit={sendEmail}>
              <label htmlFor='name'>Name:</label>
              <input type='text' name='from_name' />

              <label htmlFor='email'>Email:</label>
              <input type='email' name='from_email' />

              <label htmlFor='message'>Message:</label>
              <textarea id='message' name='message'></textarea>

              <button type='submit'>Send 💬</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
