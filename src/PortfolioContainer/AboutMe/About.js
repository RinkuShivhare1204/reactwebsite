import React from 'react';
import "./About.css";

export default function About() {
  return (
    <div className='about-container'>
      <h1>About Me</h1>

      {/* New heading */}
      <h2>Why Choose Me?</h2>

      {/* Section with image, description, and features */}
      <div className='about-section'>
      <div className='about-highlighted-section'>
    <div className='about-image'>
      <img src={require('../../assets/Home/me.jpg')} alt='No internet connection'/>
    </div>

    <div className='about-description'>
      {/* Description goes here */}
      <p>
      Ambitious and diligent engineer ready to work with an organization which offers significant opportunities.
       I'm looking forward to working in a competitive environment that can boost my overall learning that would
        allow me to contribute towards achieving the organizational goals to the best of my potential.
      </p>

      {/* Features section */}
      <div className='features'>
        <h3>STRENGTH:</h3>
        <ul>
          <li>PUNCTUALITY & ADAPTABILITY</li>
          <li>GOOD COMMUNICATION SKILLS</li>
          <li>SINCERE, HARDWORKING AND MOTIVATED</li>
          <li>ALWAYS READY TO ACCEPT RESPONSIBILITIES AND CHALLENGES</li>
          {/* Add more features as needed */}
        </ul>
      </div>
    </div>
  </div>
      </div>
    </div>
  );
}
