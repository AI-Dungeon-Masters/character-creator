const sessionController = {};

sessionController.startSession = async (req, res, next) => {
  // need session table in db
  
  const params = [res.locals.user.id]; // need to set this value somewhere else

  const query = `INSERT INTO sessions (cookieId) VALUE $1`;

  try {
    const data = await sqlDB.query(query, params);
    return next();
  } catch (err) {
    return next({
      log: 'Express error handler caught databaseController.startSession error',
      message: { err: err },
      redirect: true
    })
  }

}

sessionController.isLoggedIn = async (req, res, next) => {
  const params = [req.cookies.ssid];
  
    const query = `SELECT cookieId FROM sessions WHERE cookieId = $1`;
  
    try {
      const data = await sqlDB.query(query, params);

      if (params !== data) res.redirect('/signup');
      else return next();
    } catch (err) {
      return next({
        log: 'Express error handler caught databaseController.isLoggedIn error',
        message: { err: err },
        redirect: '/'
      })
    }
}

sessionController.endSession = async (req, res, next) => {
    return next();
  }

module.exports = sessionController;
