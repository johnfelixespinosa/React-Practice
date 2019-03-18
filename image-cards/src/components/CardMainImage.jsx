import React, { Component } from 'react';
import image from '../img/diy.jpg';
import CardSubImages from './CardSubImages';

const CardMainImage = () => (
  <div className='images'>
    <img className='main' src={image} />
    <div className='sub-images'>
      <React.Fragment>
        <CardSubImages />
      </React.Fragment>
    </div>
  </div>
);

 
export default CardMainImage;