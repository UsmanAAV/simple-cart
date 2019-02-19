import React, { useState } from 'react';
import { uniqueId } from 'lodash';

const ProductAdd = (props) => {
  const { addToCart } = props;
  const [nameInputValue, setNameInputValue] = useState('');
  const [priceInputValue, setPriceInputValue] = useState(0);

  const handlePriceInput = (e) => {
    const isNumber = value => {
      const regex = new RegExp(/^-?\d*\.?\d*$/);
      return regex.test(value);
    };
    const { value } = e.target;
    if (isNumber(value)) {
      setPriceInputValue(Number(value));
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addToCart({ id: uniqueId(), name: nameInputValue, price: priceInputValue });
    setNameInputValue('');
    setPriceInputValue('');
  };

  return (
    <div>
      <h1>Добавить продукт</h1>
      <form className='product-add-form' onSubmit={handleSubmit}>
        <div>
          <p>Продукт</p>
          <input
            className='product-name-input'
            name='product-name'
            type='text'
            value={nameInputValue}
            onChange={e => setNameInputValue(e.target.value)}
          />
        </div>
        <div>
          <p>Цена</p>
          <input
            className='product-price-input'
            name='product-price'
            type='text'
            value={priceInputValue}
            onChange={handlePriceInput}
          />
        </div>
        <button name='add-product' type='sumbit'>Добавить</button>
      </form>
    </div>
  );
};

export default ProductAdd;
