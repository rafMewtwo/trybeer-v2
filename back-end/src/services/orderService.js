const { sale, salesProduct } = require('../models');

const createSale = async (
  { id, totalPrice, deliveryAddress, deliveryNumber, saleDate, saleProduct },
  ) => {
  const orders = await sale.create({ 
    totalPrice, 
    deliveryAddress,
    deliveryNumber,
    saleDate,
    userId: id,
  });

  const saleId = orders.id;

  saleProduct.forEach(async (e) => {
    await salesProduct.create({ saleId, productId: e.id, quantity: e.quantity });
  });

  return orders;
};

// Get all users
const getAll = async () => sale.findAll();

// Get id sale
const getBySalesId = async (id) => {
  const saleId = await sale.findByPk(id);
  return saleId;
};

module.exports = { 
  createSale,
  getAll,
  getBySalesId,
};
