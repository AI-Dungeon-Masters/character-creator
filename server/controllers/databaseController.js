const sqlDB = require('../database/dndModels');

const databaseController = {};

databaseController.addUser = async (req, res, next) => {
  const { username, password } = res.locals;
  const params = [username, password];

  const query = `
  INSERT INTO users (username, password)
  VALUES ($1, $2);`;

  try {
    const newUser = await sqlDB.query(query, params);
   // res.locals.newUser = newUser
    console.log(newUser);

    return next();
  } catch (err) {
    return next({
        log: 'Express error handler caught databaseController.addUser error',
        message: { err: err },
        redirect: '/signup'
      })
  }
};

databaseController.getUser = async (req, res, next) => {
    const { username, password } = res.locals;
    const params = [username];
  
    const query = `SELECT password FROM users WHERE username = $1`;
  
    try {
      const data = await sqlDB.query(query, params);
      if (data.rows.length === 0) throw "User not found!"

      const databasePassword = data.rows[0].password;
      if (databasePassword !== password) throw "Password incorrect!";

      else return next();
    } catch (err) {
      if (err === "Password incorrect!") {
        return next({
            log: 'Express error handler caught databaseController.getUser error',
            message: { err: err },
            redirect: '/'
          })
      }

      return next({
        log: 'Express error handler caught databaseController.getUser error',
        message: { err: err },
        redirect: '/'
      })
    }
};

module.exports = databaseController;
