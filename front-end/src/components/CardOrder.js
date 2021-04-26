import React from 'react';
import PropTypes from 'prop-types';

const CardOrder = ({ product, index }) => {
  const { quantity, price, name } = product;
  return (
    <li>
      <span
        data-testid={ `${index}-product-qtd` }
      >
        { `${quantity} - ` }
      </span>
      <span
        data-testid={ `${index}-product-name` }
      >
        { name }
      </span>
      <div
        data-testid={ `${index}-order-unit-price` }
      >
        {`(R$ ${price.replace('.', ',')})un.`}
      </div>
      <div
        data-testid={ `${index}-product-total-value` }
      >
        {`Valor total do produto: R$ ${price.replace('.', ',')}`}
      </div>
    </li>
  );
};

const { number, instanceOf } = PropTypes;

CardOrder.propTypes = {
  product: instanceOf(Object).isRequired,
  index: number.isRequired,
};

export default CardOrder;
