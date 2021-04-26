const { user } = require('../models');
const httpResponse = require('../utils/httpResponses');
const generateToken = require('../auth/generateToken');

const loginService = async (email, password) => {
  if (!email || !password) return httpResponse.INVALID_DATA;

  const loginUser = await user.findOne({ where:
    { email, password },
  });
 
  if (!loginUser || loginUser.length === 0) return httpResponse.USER_NOT_FOUND;
  delete loginUser.dataValues.password;

  const authenticatedUser = generateToken(loginUser.dataValues);
  
  return authenticatedUser;
};

module.exports = {
  loginService,
};