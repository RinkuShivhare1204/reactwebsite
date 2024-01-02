// Testimonials.js

import React from "react";
import TestimonialBox from "./TestimonialBox"; // Create this component next
import "./Reviews.css";
import Footer from "../Home/Footer/Footer";

const images = require.context("../../assets/Home", false, /\.(jpg)$/);

const testimonialsData = [
  {
    id: 1,
    name: "John Doe",
    message: "Great service!",
    rating: 5,
    photo: images("./me.jpg"),
  },
  {
    id: 2,
    name: "Jane Doe",
    message: "Excellent support!",
    rating: 4,
    photo: images("./daisy.jpg"),
  },
  {
    id: 3,
    name: "Alice Wonderland",
    message: "Fantastic experience!",
    rating: 5,
    photo: images("./profilephoto.jpg"),
  },
  {
    id: 4,
    name: "Bob Builder",
    message: "Awesome service!",
    rating: 5,
    photo: images("./daisy.jpg"),
  },
  {
    id: 5,
    name: "Charlie Chaplin",
    message: "Top-notch quality!",
    rating: 4,
    photo: images("./profilephoto.jpg"),
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  return (
    <div>
      <div className="reviews-container">
        <h1 className="h1heading">Testimonial</h1>
        <h4 className="reciewh4">What my client say about me</h4>
        <div className="background">
          <div className="testimonials-container">
            <div className="testimonials-scroll">
              {testimonialsData.map((testimonial) => (
                <TestimonialBox key={testimonial.id} {...testimonial} />
              ))}
            </div>
          </div>
        <div>
          <Footer />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
