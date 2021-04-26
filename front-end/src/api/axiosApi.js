import axios from 'axios';

const BASE_URL = 'http://localhost:3001/';

const api = axios.create({
  baseURL: 'http://localhost:3001/',
});

export async function login(loginUser) {
  const user = await axios.post('http://localhost:3001/login', loginUser)
    .then((resp) => resp.data)
    .catch((err) => {
      console.log(err.response);
      return err.response;
    });
  return user;
}

export async function signUp(name, email, password, role) {
  const registerUser = await axios.post('http://localhost:3001/register', {
    name, email, password, role,
  })
    .then((resp) => resp)
    .catch((err) => {
      console.log(err.response);
      return err.response;
    });
  return registerUser;
}

export async function getProducts() {
  const token = localStorage.getItem('token');
  const products = await axios.get('http://localhost:3001/products', {
    headers: {
      authorization: JSON.parse(token),
    },
  })
    .then((resp) => resp.data)
    .catch((err) => {
      console.log(err.response);
      return err.response;
    });
  return products;
}

export async function edit(id, name, email) {
  try {
    const response = await axios.put(`http://localhost:3001/profile/${id}`, {
      id, name, email,
    });
    return response;
  } catch (error) {
    if (error.response) {
      return {
        status: error.response.status,
        statusText: error.response.statusText,
        message: error.response.data.message,
      };
    }
  }
}

export async function registerOrder(
  { value, date, userID, street, number, saleProduct },
) {
  const orderDB = await axios.post(`${BASE_URL}orders`, {
    value, date, userID, street, number, saleProduct,
  })
    .then((resp) => resp.data)
    .catch((err) => {
      console.log(err.response);
      return err.response;
    });
  return orderDB;
}

async function getSales() {
  const token = localStorage.getItem('token');
  const sales = await axios.get('http://localhost:3001/orders', {
    headers: {
      authorization: JSON.parse(token),
    },
  })
    .then((resp) => resp.data)
    .catch((err) => {
      console.log(err.response);
      return err.response;
    });
  return sales;
}

async function getByIdSales(id) {
  const token = localStorage.getItem('token');
  const sales = await axios.get(`http://localhost:3001/orders/${id}`, {
    id,
    headers: {
      authorization: JSON.parse(token),
    },
  })
    .then((resp) => resp.data)
    .catch((err) => {
      console.log(err.response);
      return err.response;
    });
  return sales;
}

async function updateStatusOrder(id, statusOrder) {
  const token = localStorage.getItem('token');
  const order = await axios.put('http://localhost:3001/orders', {
    id,
    statusOrder,
    headers: {
      authorization: JSON.parse(token),
    },
  })
    .then((resp) => resp.data)
    .catch((err) => {
      console.log(err.response);
      return err.response;
    });
  return order;
}

const reloadChat = (emailuser) => (api.get('/chat', { headers: { emailuser } }));
const chatAdminList = () => (api.get('/chat/admin'));

export default {
  getSales,
  getByIdSales,
  updateStatusOrder,
  reloadChat,
  chatAdminList,
};
