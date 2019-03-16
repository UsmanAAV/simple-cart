import React from 'react';
import './index.css';

const Card = props => {
  const { title, children } = props;
  return (
    <div className='card'>
      <h2 className='title'>{title}</h2>
      {children}
    </div>
  );
};

export default Card;
