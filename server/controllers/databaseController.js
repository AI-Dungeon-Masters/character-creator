const sqlDB = require('../database/dndModels');

const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcryptjs');

const databaseController = {};

databaseController.addUser = async (req, res, next) => {
  let { username, password } = res.locals;

  const query = `
  INSERT INTO users (username, password)
  VALUES ($1, $2)
  RETURNING player_id;`;

  try {
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    const hash = await bcrypt.hash(password, salt);

    const params = [username, hash];
    const data = await sqlDB.query(query, params);
    
    const newUser = data.rows[0];
    res.locals.id = newUser.player_id;

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
    let { username, password } = res.locals;
    const params = [username];

    const query = `SELECT player_id, password FROM users WHERE username = $1`;
    try {
      const data = await sqlDB.query(query, params);
      if (data.rows.length === 0) throw "User not found!"
      
      const user = data.rows[0];
      const databasePassword = user.password;
      
      if (!await bcrypt.compare(password, databasePassword)) throw "Password incorrect!";
      else {
        res.locals.id = user.player_id;
        return next();
      };
    } catch (err) {
      if (err === "Password incorrect!") {
        return next({
            log: 'Express error handler caught databaseController.getUser error',
            message: { err: err },
            redirect: '/login'
          })
      }

      return next({
        log: 'Express error handler caught databaseController.getUser error',
        message: { err: err },
        redirect: '/signup'
      })
    }
};

module.exports = databaseController;
