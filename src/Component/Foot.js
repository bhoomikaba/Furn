import React from 'react';
import {FaFacebook, FaTwitter, FaGoogle, FaInstagram} from 'react-icons/fa'
import '../Component_CSS/Foot.css';

const Foot = () => {
  return (
    <footer className="footer">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <ul className="social-icon">
        <li className="social-icon__item">
          <a className="social-icon__link" href="/">
            <FaTwitter name="logo-facebook"></FaTwitter>
          </a>
        </li>
        <li className="social-icon__item">
          <a className="social-icon__link" href="/">
            <FaGoogle name="logo-twitter"></FaGoogle>
          </a>
        </li>
        <li className="social-icon__item">
          <a className="social-icon__link" href="/">
            <FaFacebook name="logo-linkedin"></FaFacebook>
          </a>
        </li>
        <li className="social-icon__item">
          <a className="social-icon__link" href="/">
            <FaInstagram name="logo-instagram"></FaInstagram>
          </a>
        </li>
      </ul>
      <ul className="menu">
        <li className="menu__item">
          <a className="menu__link" href="/">
            Home
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="/">
            About
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="/">
            Products
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="/">
            Reviews
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="/">
            ContactUs
          </a>
        </li>
      </ul>
      <p className='p'>&copy;2024 Designed By Bhoomikaba Zala | All Rights Reserved</p>
    </footer>
  );
};

export default Foot;