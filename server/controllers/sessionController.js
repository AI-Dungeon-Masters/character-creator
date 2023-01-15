const sessionController = {};

sessionController.startSession = async (req, res, next) => {
  // need session table in db
  
  return next();
}

sessionController.isLoggedIn = async (req, res, next) => {
  return next();
}

sessionController.endSession = async (req, res, next) => {
    return next();
  }

module.exports = sessionController;
