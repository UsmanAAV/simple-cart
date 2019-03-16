import React from 'react';
import './index.css';

const Button = (props) => {
  const { name, type, text, onClick } = props;
  return (
    <div className='button-wrapper'>
      <button
        name={name}
        type={type}
        onClick={onClick}
        className='button'
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
