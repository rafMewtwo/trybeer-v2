const registerRouter = require('express').Router();
const Service = require('../services/registerServices');
const httpStatusCode = require('../utils/httpStatusCode');
const httpResponse = require('../utils/httpResponses');

// Create a user
registerRouter.post('/', async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;
    const createdUser = await Service.create(name, email, password, role);
    if (createdUser.error) {
      return next({ statusCode: httpStatusCode.BAD_REQUEST, errorMessage: createdUser.message });
    }
    res.status(httpStatusCode.CREATED).json(createdUser);
  } catch (error) {
    console.log(error);
    if (error.code === 'ER_DUP_ENTRY') {
      res.status(httpStatusCode.CONFILCT)
      .json({ message: httpResponse.EMAIL_ALREADY_EXISTS.message });
    }
     next({ statusCode: 500, errorMessage: error.message, error });
  }
});

// Delete a user
registerRouter.delete('/delete-user/:id', async (req, res) => {
  const { id } = req.params;
  await Service.exclude(id);
  res.status(httpStatusCode.OK).json('Response deleted successfully');
});

module.exports = registerRouter;