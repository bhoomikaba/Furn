import React from 'react';
import Slideshow from './Slideshow';
import slide_11 from './image/slide_11.jpg';
import slide_2 from './image/slide_2.avif';
import slide_33 from './image/slide_33.jpg';

const Slide = () => {
  const images = [slide_11,slide_2,slide_33];
    // {furn_1},
    // {furn_2},
    // {furn_9},
    
    // 'C:/Users/Bhoomikaba/furniture/src/image/furn 1.jpg',
    // 'C:/Users/Bhoomikaba/furniture/src/image/furn_2.jpg',
    // 'C:/Users/Bhoomikaba/furniture/src/image/furn_9.jpeg',

  return (
    <div className="App">
      
      <Slideshow images={images} />
    </div>
  );
};

export default Slide;
