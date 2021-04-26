import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import NavbarAdmin from '../components/NavBarAdmin';
import withAuth from '../components/hocs/withAuth';
import { Container } from '../styles/styles';
import Api from '../api/axiosApi';
import withOrders from '../components/hocs/withHandleApi';
import './AdminOrders.css';

function AdminOrders(orders) {
  return (
    <div>
      <Header isAdmin />
      <NavbarAdmin />
      <Container>
        <div className="content-order">
          {
            !orders.loading && orders.data.map((order, index) => (
              <div key={ order.id } className="card card-order">
                <ul>
                  <Link to={ `/admin/orders/${index + 1}` }>
                    <button
                      type="button"
                      data-testid={ `${index}-order-number` }
                    >
                      {`Pedido ${index + 1}`}
                    </button>
                    <p
                      data-testid={ `${index}-order-address` }
                    >
                      {`${order.deliveryAddress}, ${order.deliveryNumber}`}
                    </p>
                    <p
                      data-testid={ `${index}-order-total-value` }
                    >
                      {`R$ ${order.totalPrice.replace('.', ',')}`}
                    </p>
                    <p
                      data-testid={ `${index}-order-status` }
                    >
                      { order.status }
                    </p>
                  </Link>
                </ul>

              </div>
            ))
          }
        </div>
      </Container>
    </div>
  );
}

export default withAuth(withOrders(AdminOrders, Api.getSales));
