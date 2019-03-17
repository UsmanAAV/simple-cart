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
        />
        <Input
          label='Цена'
          name='product-price'
          inputClass='product-price-input'
          type='text'
          value={priceInputValue}
          onChange={handlePriceInput}
          width='50px'
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
