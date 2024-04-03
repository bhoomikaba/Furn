import React, { useState } from 'react';
import '../Component_CSS/Test.css';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    comment: 'Amazing furniture! Really happy with my purchase.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    comment: 'Great quality and excellent customer service.',
  },
  {
    id: 3,
    name: 'Johnson',
    comment: 'Superb Designs and Good Quality',
  },
  // Add more testimonials as needed
];

const TestimonialsSlider = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  return (
    <div className="testimonials-slider">
      {testimonials.map((testimonial, idx) => (
        <div
          key={testimonial.id}
          className={idx === index ? 'slide_ active' : 'slide_'}
        >
          <h3>{testimonial.name}</h3>
          <p>{testimonial.comment}</p>
        </div>
      ))}
      <button className="prev" onClick={prevSlide}>Prev</button>
      <button className="next" onClick={nextSlide}>Next</button>
    </div>
  );
};

export default TestimonialsSlider;
