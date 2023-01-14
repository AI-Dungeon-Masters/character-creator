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
        err: 'An er'
    })
  }
}

module.exports = databaseController;
