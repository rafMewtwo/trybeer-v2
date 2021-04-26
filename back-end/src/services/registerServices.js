const { user } = require('../models');
const httpResponse = require('../utils/httpResponses');
const validators = require('../utils/validationsEntries');
// Create a user
const create = async (name, email, password, role) => {
  if (!validators.validName(name)
  || !validators.validEmail(email)
  || !validators.validPassword(password)) return httpResponse.INVALID_DATA;

  const userCreated = await user.create({ name, email, password, role });
  
  if (!userCreated) return httpResponse.INVALID_DATA;
  
  return { name, email, role };
};

// Delete a user
const exclude = async (id) => {
  const users = await user.destroy({ where: { id } });
  return users;
};

module.exports = {
  create,
  exclude,
};
