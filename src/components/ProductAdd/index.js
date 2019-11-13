import React, { useState } from 'react';
import { uniqueId } from 'lodash';

import './index.css';
import Input from '../Input';
import Button from '../Button';
import Card from '../Card';

const ProductAdd = (props) => {
  const { addToCart } = props;
  const [nameInputValue, setNameInputValue] = useState('');
  const [priceInputValue, setPriceInputValue] = useState(0);

  const handlePriceInput = (e) => {
    const { value } = e.target;
    setPriceInputValue(Number(value));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!priceInputValue) {
      return;
    }
    addToCart({ id: uniqueId(), name: nameInputValue, price: priceInputValue });
    setNameInputValue('');
    setPriceInputValue(0);
  };

  return (
    <Card title='Добавить продукт'>
      <form className='product-add-form' onSubmit={handleSubmit}>
        <Input
          label='Продукт'
          name='product-name'
          inputClass='product-name-input'
          type='text'
          placeholder='Название продукта'
          value={nameInputValue}
          onChange={e => setNameInputValue(e.target.value)}
          width='120px'
          required
        />
        <Input
          label='Цена'
          name='product-price'
          inputClass='product-price-input'
          type='number'
          value={priceInputValue}
          onChange={handlePriceInput}
          width='50px'
          max={1000000}
          min={0}
          required
        />
        <Button
          name='add-product'
          type='submit'
          text='Добавить'
          buttonClass='add-product'
        />
      </form>
    </Card>
  );
};

export default ProductAdd;
