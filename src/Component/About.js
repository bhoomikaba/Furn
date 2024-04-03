import React from 'react';
import '../Component_CSS/About.css';
import found_2 from '../image/Found_2.jpg';
import sign from '../image/sign.png';

const About = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ex eget augue
          sollicitudin dapibus. Ut lacinia ullamcorper diam, nec tempus libero tempus vitae.
          Aliquam erat volutpat. Integer mattis, quam sit amet luctus venenatis, nunc mi
          pulvinar est, sed porta justo nunc non lorem. Aenean eu bibendum lorem.
        </p>
        <img className="owner-signature" src={sign} alt="Owner's Signature" />
        <button className="our-story-btn">Our Story</button>
      </div>
      
      <div className="about-us-image">
        <img src={found_2} alt="About Us" />
      </div>
      
    </div>
  );
};

export default About;
