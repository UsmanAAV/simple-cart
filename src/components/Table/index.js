import React from 'react';
import './index.css';

const TD = props => <td className="table-cell">{props.children}</td>;

const Table = props => {
  const { items, cartEmptyMessage } = props;
  return (
    <div className="table-wrapper">
      {items.length ? (
        <table className="table">
          <thead className='table-header'>
            <tr>
              <TD>Продукт</TD>
              <TD>Цена</TD>
              <TD>Цена со скидкой</TD>
            </tr>
          </thead>
          <tbody>
            {items.map((product, index) => (
              <tr key={product.id} className={index % 2 === 0 ? 'evenrow' : 'oddrow'}>
                <TD>{product.name}</TD>
                <TD>{product.price}</TD>
                <TD>{product.discountPrice}</TD>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className='message'>{cartEmptyMessage}</p>
      )}
    </div>
  );
};

export default Table;
