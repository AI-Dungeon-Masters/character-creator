const userController = {};

userController.verifyUser = async (req, res, next) => {
  const { username, password } = req.body;
  
  try {
    if ( !username || !password ) throw 'Empty username or password field';
    res.locals.username = username;
    res.locals.password = password;

    return next();
  } catch (err) {
    return next({
      log: 'Express error handler caught userController.verifyUser error',
      message: { err: err },
      redirect: '/login'
    })
  }
};

userController.createUser = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    if ( !username || !password ) throw 'Empty username or password field';
    res.locals.username = username;
    res.locals.password = password;

    return next();
  }
  catch (err) {
    return next({
      log: 'Express error handler caught userController.createUser error',
      message: { err: err },
      redirect: '/signup'
    })
  }
}

module.exports = userController;
