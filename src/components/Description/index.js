import React from 'react';
import './index.css';
import Card from '../Card';

const Description = () => {
  return (
    <Card title='Подсказки'>
      <p>
        Скидка для каждой позиции рассчитывается пропорционально цене товара.
        Скидка всегда в рублях без копеек.
        Сумма скидок по каждому товару всегда точно равна общей сумме.
        При округлении остаток суммы применяется к самому дорогому товару в корзине.
      </p>
      <p>
        Исходный код приложения находится на <a href='https://github.com/UsmanAAV/simple-cart'>гитхабе</a>
      </p>
    </Card>
  );
};

export default Description;
