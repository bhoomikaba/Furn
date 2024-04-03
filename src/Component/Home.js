import React from 'react';
import Slide  from '../slide';
import About from '../Component/About';
import Category from '../Component/Category';
import Card from '../Component/Card';
import PhotoSlide from '../Component/PhotoSlide';
import  TestimonialsSlider from '../Component/Test';
import Brand from '../Brand';
import Mail from '../Component/Mail';


export default function Home() {
  return (
    <>
    <div class="container">
    <h1 class="animated-text">Welcome to Wooden World</h1>
    </div>
      <Slide/>
      <About/>
      <Category/>
      <PhotoSlide/>
      <TestimonialsSlider/>
      <Card/>
      <Brand/>
      <Mail/>
    </>
  )
}
