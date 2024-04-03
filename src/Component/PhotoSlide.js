import React from 'react';
import '../Component_CSS/photoSlide.css';
import chair1 from '../image/chairs/chair1.jpeg';
import bed1 from '../image/beds/bed1.jpeg';
import bed2 from '../image/beds/bed2.jpeg';
import sofa12 from '../image/sofas/sofa12.jpeg';
import table3 from '../image/table/table3.jpeg';
import table6 from '../image/table/table6.jpeg';

const images = [
  { id: 'chair1', src: chair1, description: 'Classic Garden Chair'},
  { id: 'bed1', src: bed1, description: 'Dream Haven Bed' },
  { id: 'bed2', src: bed2, description: 'Classic Upholstered Bed' },
  { id: 'sofa12', src: sofa12, description: 'Chic Comfort Oasis' },
  { id: 'table3', src: table3, description: 'Urban Charm Centerpiece' },
  { id: 'table6', src: table6, description: 'Inspiration Station Desk' },
];

const PhotoSlide = () => {
  return (
<>
    <h1 className='h_head'>BEST SELLERS</h1>
    <h5 className='h_title'>Discover our top picks, loved by many</h5>

    <div className="slider-container">
      <marquee behavior="alternate" direction="left">
      <div className="slider">
        {images.map((image) => (
          <div className="image-container" key={image.id}>
            <img src={image.src} alt={image.description} className="image" />
            <div className="image-overlay">{image.description}</div>
          </div>
        ))}
      </div>
      </marquee>
    </div>
    </>
  );
};

export default PhotoSlide;
