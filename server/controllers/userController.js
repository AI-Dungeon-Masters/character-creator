const userController = {};

userController.verifyUser = async (req, res, next) => {
  const { username, password } = req.body;
  
  if ( !username || !password ) throw 'Empty username or password field';
  res.locals.username = username;
  res.locals.password = password;

  return next();
};

userController.createUser = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const { username, password } = req.body;
    if ( !username || !password ) throw 'Empty username or password field';
    res.locals.username = username;
    res.locals.password = password;

    return next();
  }
  catch (err) {
    return next({
      err: `An error has occurred: ${err}`
    });
  }


  return next();
}

module.exports = userController;
