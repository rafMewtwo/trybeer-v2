const loginRouter = require('express').Router();
const Service = require('../services/loginService');

loginRouter.post('/', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    
    const user = await Service.loginService(email, password);
    
    if (user.error) {
      return res
        .status(400)
        .json({ message: user.message });
    } 
  
    return res.status(200).json(user);
  } catch (error) {
    return next({
      statusCode: 500,
      errorMessage: error.message,
      error,
    });
  }
});

module.exports = loginRouter;