require('dotenv').config();

const keygen = require('generate-rsa-keypair');
const jwt = require('jsonwebtoken');
const jwt_decode = require("jwt-decode");

const { Session } = require('../database/mongoDBModels');

const sessionController = {};

sessionController.startSession = async (req, res, next) => {
  // need session table in db
  const { id } = res.locals;

  try {
    if(req.cookies.publicKey) {
      const { publicKey, token } = req.cookies;
      const { id: tokenId } = jwt_decode(token);

      if (id === tokenId) {
        const session = await Session.findOne({ publicKey });
        if (session) {
          const verifyOptions = {
            algorithm:  ["RS256"]
           };
          jwt.verify(token, publicKey, verifyOptions);

          res.locals.publicKey = publicKey;
          res.locals.token = token;

          return next();
        }
      }
    }
    
    const { public: publicKey, private: privateKey } = keygen();
    const signOptions = {
      expiresIn:  process.env.SESSION_EXPIRE_TIME,
      algorithm:  "RS256"
    };
    const payload = { id };
    const token = jwt.sign(payload, privateKey, signOptions);

    await Session.create({ publicKey, privateKey });

    res.locals.publicKey = publicKey;
    res.locals.token = token;

    return next();
    
  } catch (err) {
    return next({
      log: 'Express error handler caught sessionController.startSession error',
      message: { err: err },
    })
  }
}

sessionController.endSession = async (req, res, next) => {
  
  return next();
}

// Because of the way we structured our app, this method likely isn't necessary.
/*
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
    try {
    const { ssid } = req.cookies;
    if (!ssid) throw 'No ssid in cookies';
    const session = await Session.findOne({ cookieId: ssid });
    if (session) return next();
    else throw 'Session doesn\'t exist';
  }
  catch (err) {
    return next({
      err: `An error has occurred: ${err}`,
      redirect: true
    });
  }
}
*/

module.exports = sessionController;
