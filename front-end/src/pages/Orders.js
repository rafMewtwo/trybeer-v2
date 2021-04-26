import React from 'react';
import { useHistory } from 'react-router';
import withAuth from '../components/hocs/withAuth';
import Api from '../api/axiosApi';
import withHandleApi from '../components/hocs/withHandleApi';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { Container } from '../styles/styles';

function Order(orders) {
  const history = useHistory();

  function formatDate(date) {
    const TEN = 10;
    const newDate = new Date(date);
    let month = newDate.getMonth() + 1;
    if (month < TEN) {
      month = `0${month}`;
    }
    return `${newDate.getDate()}/${month}`;
  }

  const user = JSON.parse(localStorage.getItem('user'));
  const { role } = user;

  return (
    <div>
      <Header isAdmin={ role === 'administrator' } />
      <Navbar />
      <Container>
        <div data-testid="0-order-card-container">
          {
            !orders.loading && orders.data.map((e, index) => (
              <ul key={ index }>
                <li>
                  <div>
                    <button
                      type="button"
                      data-testid={ `${index}-order-number` }
                      onClick={ () => history.push(`/orders/${index + 1}`) }
                    >
                      {`Pedido ${index + 1}`}
                    </button>
                    <h5 data-testid={ `${index}-order-date` }>
                      {formatDate(e.saleDate)}
                    </h5>
                    <p data-testid={ `${index}-order-total-value` }>
                      {`R$ ${e.totalPrice.replace('.', ',')}`}
                    </p>
                    <p data-testid={ `${index}-order-status` }>
                      {`${e.status}`}
                    </p>
                  </div>
                </li>
              </ul>
            ))
          }
        </div>
      </Container>
    </div>
  );
}

export default withAuth(withHandleApi(Order, Api.getSales));
