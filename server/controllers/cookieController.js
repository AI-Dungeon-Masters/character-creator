require('dotenv').config();

const cookieController = {};

cookieController.setSSIDCookie = async (req, res, next) => {
  const { publicKey, token } = res.locals;
  
  res.cookie('publicKey', publicKey, { httpOnly: true, maxAge: process.env.COOKIE_EXPIRE_TIME });
  res.cookie('token', token, { httpOnly: true, maxAge: process.env.COOKIE_EXPIRE_TIME });
  
  return next();
}

cookieController.deleteSSIDCookie = async (req, res, next) => {
  return next();
}

module.exports = cookieController;