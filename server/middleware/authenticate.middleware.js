const passport = require("passport");

async function authenticate(req, res, next) {
  passport.authenticate("jwt", (err, user, info) => {
    //! Checking if there's an error or no user and if so sending a response
    if (err || !user) {
      res.clearCookie("jwt");
      return res.send({ success: false, data: null, error: info });
    }
    //! Attaching the user to the req object
    req.user = user;
    //! Moving to the next step
    return next();
  })(req, res, next);
}

module.exports = authenticate;
