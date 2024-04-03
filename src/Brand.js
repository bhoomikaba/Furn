import React from 'react';
import './Component_CSS/Brand.css';
import brand_1 from './image/logos_img/brand_1.png';
import brand_2 from './image/logos_img/brand_2.png';
import brand_3 from './image/logos_img/brand_3.png';
import brand_4 from './image/logos_img/brand_4.png';
import brand_5 from './image/logos_img/brand_5.png';
import brand_6 from './image/logos_img/brand_6.png';

export default function Brand() {
  return (
    <div>
       <div className="spon">
        <marquee behavior="alternate" direction="left">
         <img src= {brand_1}/>
         <img src={brand_2} />
         <img src={brand_3} />
         <img src={brand_4} />
         <img src={brand_5} />
         <img src={brand_6} />
      </marquee>
  </div>
    </div>
  )
}
