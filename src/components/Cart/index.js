import React, { useState } from 'react';

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
    updateDiscount(discountInputValue);
  };

  return (
    <div className='cart'>
      <h1>Корзина</h1>
      {productsList.length
        ? <table>
            <thead>
              <tr>
                <th>Продукт</th>
                <th>Цена</th>
                <th>Цена со скидкой</th>
              </tr>
            </thead>
            <tbody>
              {productsList.map(product => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.discountPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        : <p>Ваша корзина пуста</p>
      }
      <div>
        <span>Применить скидку</span>
        <input
          className='discount-input'
          name='discount'
          type='text'
          value={discountInputValue}
          onChange={handleDiscountInput}
        />
        <span>рублей</span>
        <button
          className='discount-set-button'
          name='update-discount'
          type='button'
          onClick={handleDiscountUpdateButton}
        >
          Применить
        </button>
      </div>
    </div>
  );
};

export default Cart;
