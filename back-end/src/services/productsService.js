const { product } = require('../models');

// Get all users
const getAll = async () => product.findAll();

module.exports = {
  getAll,
};