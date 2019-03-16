import React from 'react';
import './index.css';

const Input = (props) => {
  const { label, name, type, value, placeholder, onChange, width } = props;
  return (
    <div className='input-wrapper'>
      <label htmlFor='input' className='input-label'>
        {label}
      </label>
      <input
        id='input'
        className='input-field'
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
