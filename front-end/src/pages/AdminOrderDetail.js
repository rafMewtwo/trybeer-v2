import React, { useState } from 'react';
import { useParams } from 'react-router';
import Api from '../api/axiosApi';
import NavbarAdmin from '../components/NavBarAdmin';
import Header from '../components/Header';
import CardOrder from '../components/CardOrder';
import { Container } from '../styles/styles';

import './AdminOrderDetail.css';
import useDataFetch from '../Hooks/useDataFetch';

function AdminOrderDetail() {
  const { id } = useParams();
  const [status, setStatus] = useState(null);
  const { result } = useDataFetch(Api.getByIdSales, id);

  const totalValue = result.map((el) => el.totalPrice.replace('.', ','));
  const orderNumber = result.map((el) => el.id);
  const orderStatus = result.map((el) => el.status);

  const handleStatusOrder = async () => {
    await Api.updateStatusOrder(id, 'Entregue');
    setStatus('Entregue');
  };

  const handleStatusOrderPreparing = async () => {
    await Api.updateStatusOrder(id, 'Preparando');
    setStatus('Preparando');
  };

  return (
    <section>
      <Header isAdmin />
      <NavbarAdmin />
      <Container>
        <div>
          {
            result && (
              <div className="card">
                <h2 data-testid="order-number">
                  {`Pedido ${orderNumber[0]}`}
                </h2>
                <h2 data-testid="order-status">
                  { status || orderStatus[0] }
                </h2>
                <ul>
                  { result.map((product, index) => (
                    <CardOrder
                      key={ index }
                      product={ product }
                      index={ index }
                    />
                  ))}
                </ul>
                <div
                  className="bottom-card"
                  data-testid="order-total-value"
                >
                  {`Valor total do pedido: R$ ${totalValue[0]}`}
                </div>
                {
                  status !== 'Entregue' && (
                    <button
                      type="button"
                      data-testid="mark-as-delivered-btn"
                      onClick={ () => handleStatusOrder() }
                    >
                      Marcar como entregue
                    </button>
                  )
                }
                {
                  status !== 'Entregue' && (
                    <button
                      type="button"
                      data-testid="mark-as-prepared-btn"
                      onClick={ () => handleStatusOrderPreparing() }
                    >
                      Preparar pedido
                    </button>
                  )
                }
              </div>
            )
          }
        </div>
      </Container>
    </section>
  );
}

export default AdminOrderDetail;
