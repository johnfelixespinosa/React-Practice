import React, { Component } from 'react';
import image from '../img/787.jpg';
import image2 from '../img/sub1.jpg';
import image3 from '../img/sub2.jpg';

const CardSubImages = () => (
  <div className='sub-images'>
    <img className="sub-image" height='75' width='75' src={image} />
    <img className="sub-image" height='75' width='75' src={image2} />
    <img className="sub-image" height='75' width='75' src={image3} />
  </div>
);
 
export default CardSubImages;