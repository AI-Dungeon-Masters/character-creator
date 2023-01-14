const userController = {};

userController.verifyUser = async (req, res, next) => {
  const { username, password } = req.body;

  return next();
};

userController.createUser = async (req, res, next) => {
  const { username, password } = req.body;

  return next();
}

module.exports = userController;
