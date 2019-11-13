[![Build Status](https://travis-ci.org/UsmanAAV/simple-cart.svg?branch=master)](https://travis-ci.org/UsmanAAV/simple-cart) [![Maintainability](https://api.codeclimate.com/v1/badges/4cf8be0da2f88e495cb7/maintainability)](https://codeclimate.com/github/UsmanAAV/simple-cart/maintainability)

# simple-cart

simple application with cart functional

[DEMO](http://usmanaav.github.io/simple-cart)


## Описание

Это тестовое задание на позицию 'Frontend-разработчик' в компанию `N`.


## Требования

### Форма добавления товара
В форме **'Добавить продукт'** можно добавить продукт (указав его цену) в корзину.

### Корзина
 - скидка для каждой позиции рассчитывается пропорционально цене товара;
 - скидка всегда в рублях без копеек;
 - сумма скидок по каждому товару всегда точно равна общей сумме. При округлении остаток суммы применяется к самому дорогому товару в корзине.

### Форма ввода скидки
Здесь можно указать скидку в рублях (НЕ в процентах).  Скидка делится на все товары пропорционально их цене.
