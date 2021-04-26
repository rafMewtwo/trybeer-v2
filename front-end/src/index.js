import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import UserProvider from './context/UserProvider';
import ProductsProvider from './context/ProductsProvider';
import GlobalStyle from './styles/global';

ReactDOM.render(
  <UserProvider>
    <ProductsProvider>
      <BrowserRouter>
        <App />
        <GlobalStyle />
      </BrowserRouter>
    </ProductsProvider>
  </UserProvider>,
  document.getElementById('root'),
);
