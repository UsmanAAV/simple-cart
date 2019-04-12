import React, { useState } from 'react';
import './index.css';
import Input from '../Input';
import Button from '../Button';
import Card from '../Card';
import Table from '../Table';

const Cart = (props) => {
  const { productsList, updateDiscount } = props;
  const [discountInputValue, setDiscountValue] = useState(0);

  const handleDiscountInput = (e) => {
    const isNumber = value => {
      const regex = new RegExp(/^-?\d*\.?\d*$/);
      return regex.test(value);
    };
    const { value } = e.target;
    if (isNumber(value)) {
      setDiscountValue(Number(value));
    }
  };

  const handleDiscountUpdateButton = (e) => {
    e.preventDefault();
    updateDiscount(0);
  };

  return (
    <Card title='Корзина'>
      <Table items={productsList} cartEmptyMessage='Ваша корзина пуста' />
      <div className='discount'>
        <span>Скидка</span>
        <Input
          name='discount'
          inputClass='discount-input'
          type='text'
          value={discountInputValue}
          onChange={handleDiscountInput}
          width='30px'
        />
        <span>рублей</span>
        <Button
          name='update-discount'
          type='button'
          text='Применить'
          buttonClass='set-discount'
          onClick={handleDiscountUpdateButton}
        />
      </div>
    </Card>
  );
};

export default Cart;
