const { user } = require('../models');

// Get all users
const getAll = async () => user.findAll();

// Edit a user
const editUserService = async (name, email) => {
  const userUpdate = await user.findOne({ where: { email } });
  userUpdate.name = name;
  await userUpdate.save();

  return userUpdate;
};

module.exports = {
  editUserService,
  getAll,
};
