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
    const { value } = e.target;
    setDiscountValue(Number(value));
  };

  const handleDiscountUpdateButton = (e) => {
    e.preventDefault();
    updateDiscount(discountInputValue);
  };

  return (
    <Card title='Корзина'>
      <Table items={productsList} cartEmptyMessage='Ваша корзина пуста' />
      <form className='discount-form' onSubmit={handleDiscountUpdateButton}>
        <span>Скидка</span>
        <Input
          name='discount'
          inputClass='discount-input'
          type='number'
          value={discountInputValue}
          onChange={handleDiscountInput}
          width='30px'
          max={99}
          min={0}
        />
        <span>рублей</span>
        <Button
          disabled={!productsList || productsList.length === 0}
          name='update-discount'
          type='submit'
          text='Применить'
          buttonClass='set-discount'
        />
      </form>
    </Card>
  );
};

export default Cart;
