import React, { useState } from 'react';
import ProductAdd from './components/ProductAdd';
import Cart from './components/Cart';

const App = () => {
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);
  const [productsList, updateProductsList] = useState([]);

  const getDiscountPricesList = (newProductsList, newTotal, newDiscount) => {
    const discountBase = newDiscount / newTotal;
    const listWithDiscounts = newProductsList.map(product => ({
      ...product,
      discountPrice: product.price - Math.floor(product.price * discountBase),
    }));
    const discountRest = listWithDiscounts.reduce((acc, { price, discountPrice }) => acc + (price - discountPrice), 0);
    if (discountRest === newDiscount) {
      return listWithDiscounts;
    }
    const { iMax } = listWithDiscounts.reduce((acc, { price }, index) => price > acc.max ? { iMax: index, max: price } : acc, { iMax: 0, max: 0 });
    const result = listWithDiscounts
      .map((product, index) => (
        iMax === index
        ? { ...product, discountPrice: product.discountPrice - (newDiscount - discountRest) }
        : product
      ));
    return result;
  };

  const addToCart = (product) => {
    setTotal(total + product.price);
    updateProductsList(getDiscountPricesList([...productsList, product], total + product.price, discount));
  };

  const updateDiscount = (newDiscount) => {
    setDiscount(newDiscount);
    updateProductsList(getDiscountPricesList(productsList, total, newDiscount));
  };

  return (
    <div className="App">
      <main>
        <ProductAdd addToCart={addToCart} />
        <Cart
          productsList={productsList}
          updateDiscount={updateDiscount}
        />
      </main>
    </div>
  );
};

export default App;
