const productsRouter = require('express').Router();
const Service = require('../services/productsService');
const status = require('../utils/httpStatusCode');

productsRouter.get('/', async (_req, res) => {
    try {
      const allProducts = await Service.getAll();

      return res.status(status.OK).json(allProducts);
    } catch (error) {
      return res.status(status.INTERNAL_SERVER_ERROR).json({ message: 'Internal Server Error' });
    }
});

module.exports = productsRouter; 