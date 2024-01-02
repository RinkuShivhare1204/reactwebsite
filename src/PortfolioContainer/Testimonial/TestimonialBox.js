// TestimonialBox.js

import React from 'react';
import './TestimonialBox.css';

const TestimonialBox = ({ name, message, rating, photo }) => {
  return (
    <div className='testimonial-container'>
        <div>
        <div className="testimonial-box">
      <div className="photo-container">
        <img src={photo} alt={`${name} avatar`} className="avatar" />
      </div>
      <div className="content">
        <p className="message">{message}</p>
        <div className="rating">
          {Array.from({ length: rating }, (_, index) => (
            <span key={index}>&#9733;</span> // Unicode star character
          ))}
        </div>
        <p className="name">{name}</p>
      </div>
    </div>
        </div>
    </div>
  );
};

export default TestimonialBox;
