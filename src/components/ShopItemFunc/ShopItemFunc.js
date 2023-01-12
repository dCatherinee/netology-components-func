import React from 'react';
import PropTypes from 'prop-types';

const ShopItemFunc = (props) => {
  const {item} = props;

  return (
    <div className="main-content">
      <h2>{item.brand}</h2>
      <h1>{item.title}</h1>
      <h3>{item.description}</h3>
      <div className="description">{item.descriptionFull}</div>
      <div className="highlight-window mobile">
        <div className="highlight-overlay" />
      </div>
      <div className="divider" />
      <div className="purchase-info">
        <div className="price">{item.currency + (Number.isInteger(item.price) ? item.price + '.00' : item.price)}</div>
        <button>Добавить в корзину</button>
      </div>
    </div>
  )
}

ShopItemFunc.propTypes = {
  item: PropTypes.shape({
    brand: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    descriptionFull: PropTypes.string,
    price: PropTypes.number,
    currency: PropTypes.string
  })
};

ShopItemFunc.defaultProps = {
  item: {
    brand: 'Sample text',
    title: 'Sample text',
    description: 'Sample text',
    descriptionFull: 'Sample text',
    price: 99,
    currency: '$'
  }
};

export default ShopItemFunc;