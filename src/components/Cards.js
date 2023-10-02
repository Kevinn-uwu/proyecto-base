import React from 'react';
import Card1 from './Card';
import Card2 from './Card2';
import Card3 from './Card3';

import image1 from "../assets/twice1.jpg";
import image2 from "../assets/nayeon.jpg";
import image3 from "../assets/itzy.jpg"; 

export default function Cards () {
  return (
    <div className='container d-flex justify-content-center align-items-center h-100'>
      <div className='row'>
        <div className='col-md-4'>
          <Card1 image={image1} />
        </div>
        <div className='col-md-4'>
          <Card2 image={image2} />
        </div>
        <div className='col-md-4'>
          <Card3 image={image3} />
        </div>
      </div>
    </div>
  )
}