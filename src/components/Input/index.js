import React from 'react';
import cn from 'classnames';
import './index.css';

const Input = (props) => {
  const { label, name, inputClass, type, value, placeholder, onChange, width, ...restProps } = props;
  return (
    <div className='input-wrapper'>
      <label htmlFor='input' className='input-label'>
        {label}
      </label>
      <input
        {...restProps}
        id='input'
        className={cn('input-field', inputClass)}
        type={type}
        style={{ width, height: '22px' }}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
