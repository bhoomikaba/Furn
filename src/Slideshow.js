import React, { useState, useEffect } from 'react';
import './Component_CSS/slide.css';

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  // Function to handle previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Automatic slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex]); // Trigger effect when currentIndex changes

  return (
    <div className="slideshow">
      <div className="slide">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      </div>
    </div>
  );
};

export default Slideshow;
