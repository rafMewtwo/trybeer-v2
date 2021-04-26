const jwt = require('jsonwebtoken');
const httpResponse = require('../utils/httpResponses');
const httpStatusCode = require('../utils/httpStatusCode');

const SECRET = 'my&7Ip$xk6PIsDL';
// const { SECRET } = process.env;

const validateToken = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return httpResponse.UNAUTHORIZED; 

  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) {
      return res
        .status(httpStatusCode.UNAUTHORIZED)
        .json({ message: err.message });
      } 
      req.user = decoded;
  });
  next();
};

module.exports = validateToken;