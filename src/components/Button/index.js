import React from 'react';
import cn from 'classnames';
import './index.css';

const Button = (props) => {
  const { name, type, text, buttonClass, onClick, ...restProps } = props;
  return (
    <div className='button-wrapper'>
      <button
        {...restProps}
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
