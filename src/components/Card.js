import React from 'react';

export default function Card1({ image }) {
  return (
    <div className='Card text-center bg-dark'>
      <div className='Card-body text-light'>
        <img src={image} alt='imagen' className='card-image' />
        <h4 className='Card-title'> Twice </h4>
        <p className='Card-text-secondary'>
          Album: Feel special
        </p>
        <a href='#!' className='btn btn-outline-primary rounded'>
          Ir Al Sitio Web
        </a>
      </div>
    </div>
  )
}