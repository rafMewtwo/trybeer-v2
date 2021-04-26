import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import withAuth from '../components/hocs/withAuth';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Api from '../api/axiosApi';

import CardOrder from '../components/CardOrder';
import { Container } from '../styles/styles';

import './OrderDetail.css';

function OrderDetail() {
  const { id } = useParams();
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    const findByID = async () => {
      const result = await Api.getByIdSales(id);
      setOrders(result);
    };
    findByID();
  }, [id]);

  const user = JSON.parse(localStorage.getItem('user'));
  const { role } = user;

  function formatDate(date) {
    const TEN = 10;
    const newDate = new Date(date);
    let month = newDate.getMonth() + 1;
    if (month < TEN) {
      month = `0${month}`;
    }
    return `${newDate.getDate()}/${month}`;
  }

  return (
    <section>
      <Header isAdmin={ role === 'administrator' } />
      <Navbar />
      <Container>
        {
          (orders && orders.length > 0) && (
            <div className="content">
              <div className="top-card title">
                <h2
                  className="order"
                  data-testid="order-number"
                >
                  {`Pedido ${orders[0].id}`}
                </h2>
                <h2
                  className="date"
                  data-testid="order-date"
                >
                  { formatDate(orders[0].saleDate) }
                </h2>
              </div>
              <ul className="middle-card">
                { orders.map((product, index) => (
                  <CardOrder
                    key={ index }
                    product={ product }
                    index={ index }
                  />
                ))}
              </ul>
              <div
                className="bottom-card total-value item-grid"
                data-testid="order-total-value"
              >
                {` Valor total do pedido: R$ ${orders[0].totalPrice.replace('.', ',')}`}
              </div>
              <h3 data-testid="order-status">{`${orders[0].status}`}</h3>
            </div>
          )
        }
      </Container>

    </section>
  );
}

export default withAuth(OrderDetail);
