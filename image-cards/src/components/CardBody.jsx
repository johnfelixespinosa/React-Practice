import React, { Component } from 'react';
import CardTitle from './CardTitle';
import CardCategory from './CardCategory';
import CardMainImage from './CardMainImage';

const CardBody = () => (
  <div className="card-body">
    <CardTitle />
    <CardCategory />
    <CardMainImage />
  </div>
);
  
 
export default CardBody;