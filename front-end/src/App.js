import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AdminOrders from './pages/AdminOrders';
import AdminProfile from './pages/AdminProfile';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import Login from './pages/Login';
import Products from './pages/Products';
import Profile from './pages/Profile';
import Register from './pages/Register';
import orders from './pages/Orders';
import OrderDetail from './pages/OrderDetail';
import AdminOrdersDetail from './pages/AdminOrderDetail';
import ChatMessager from './pages/Chat';
import ChatAdmin from './pages/ChatAdmin';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/login" component={ Login } />
        <Route exact path="/register" component={ Register } />
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/orders" component={ orders } />
        <Route exact path="/orders/:id" component={ OrderDetail } />
        <Route exact path="/products" component={ Products } />
        <Route exact path="/checkout" component={ Checkout } />
        <Route exact path="/admin/profile" component={ AdminProfile } />
        <Route exact path="/admin/orders" component={ AdminOrders } />
        <Route exact path="/admin/orders/:id" component={ AdminOrdersDetail } />
        <Route exact path="/chat" component={ ChatMessager } />
        <Route exact path="/admin/chats" component={ ChatAdmin } />
      </Switch>
    </div>
  );
}

export default App;
