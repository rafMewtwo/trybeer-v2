const profileRouter = require('express').Router();
const Service = require('../services/profileService');
const { OK } = require('../utils/httpStatusCode');
// const Users = require('../models/profileModels');

// Get all users
profileRouter.get('/get-all', async (req, res) => {
  const users = await Service.getAll();
  res.status(OK).json(users);
});

// Edit a user
profileRouter.put('/:id', async (req, res) => {
  const { name, email } = req.body;
  await Service.editUserService(name, email);
  res.status(OK).send({ message: 'Atualização concluída com sucesso' });
});

// profileRouter.put('/:id', async (req, res) => {
//   // const { id } = req.params;
//   const { name, email } = req.body;
//   const user = await Service.editUser( name, email);
//   return res.status(200).json(user);
// });

module.exports = profileRouter;