const jwt = require('jsonwebtoken');

const SECRET = 'my&7Ip$xk6PIsDL';
// const { SECRET } = process.env;

const generateToken = (user) => {
  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };
  const token = jwt.sign({ data: user }, SECRET, jwtConfig);
  const authenticatedUser = { ...user, token };
  
  return authenticatedUser;
};

module.exports = generateToken;