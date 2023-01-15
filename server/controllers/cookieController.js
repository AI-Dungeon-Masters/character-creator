const cookieController = {};

cookieController.setSSIDCookie = async (req, res, next) => {
  //res.cookie('ssid', res.locals.id, { httpOnly: true });
  return next();
}

cookieController.deleteSSIDCookie = async (req, res, next) => {
  return next();
}

module.exports = cookieController;