import React from 'react';
import cn from 'classnames';
import './index.css';

const Button = (props) => {
  const { name, type, text, buttonClass, onClick } = props;
  return (
    <div className='button-wrapper'>
      <button
        name={name}
        type={type}
        onClick={onClick}
        className={cn('button', buttonClass)}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
